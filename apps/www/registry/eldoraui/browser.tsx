"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Battery,
  BookmarkIcon,
  ChevronLeft,
  ChevronRight,
  Download,
  Globe,
  History,
  Home,
  Lock,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  Plus,
  RotateCcw,
  Search,
  Settings,
  Shield,
  Square,
  Star,
  StarOff,
  Volume2,
  Wifi,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

interface Tab {
  id: string
  title: string
  url: string
  favicon?: string
  isActive: boolean
  isLoading: boolean
}

interface Bookmark {
  id: string
  title: string
  url: string
  favicon?: string
}

interface HistoryItem {
  id: string
  title: string
  url: string
  timestamp: Date
  favicon?: string
}

interface BrowserProps {
  image?: string
  initialUrl?: string
  initialTabs?: Partial<Tab>[]
  theme?: "light" | "dark" | "system"
  showWindowControls?: boolean
  showBookmarksBar?: boolean
  showStatusBar?: boolean
  className?: string
  enableTabManagement?: boolean
  enableBookmarks?: boolean
  enableHistory?: boolean
  enableDownloads?: boolean
  enableSettings?: boolean
  maxTabs?: number
  customBookmarks?: Bookmark[]
  customHistory?: HistoryItem[]
  onNavigate?: (url: string, tabId: string) => void
  onTabCreate?: (tab: Tab) => void
  onTabClose?: (tabId: string) => void
  onTabSwitch?: (tabId: string) => void
  onBookmarkToggle?: (url: string, isBookmarked: boolean) => void
  onDownload?: (url: string) => void
  renderContent?: (url: string, isLoading: boolean) => React.ReactNode
  customFavicons?: Record<string, string>
  openLinksInNewTab?: boolean
  autoFocusAddressBar?: boolean
  simulateLoading?: boolean
  loadingDuration?: number
}

export function Browser({
  image = "/placeholder.svg",
  initialUrl = "https://eldoraui.site",
  initialTabs,
  showWindowControls = false,
  showBookmarksBar = false,
  showStatusBar = true,
  className,
  enableTabManagement = false,
  enableBookmarks = true,
  enableHistory = true,
  enableDownloads = true,
  enableSettings = true,
  maxTabs = 10,
  customBookmarks,
  customHistory,
  onNavigate,
  onTabCreate,
  onTabClose,
  onTabSwitch,
  onBookmarkToggle,
  onDownload,
  renderContent,
  autoFocusAddressBar = false,
  simulateLoading = true,
  loadingDuration = 1000,
}: BrowserProps = {}) {
  const [tabs, setTabs] = useState<Tab[]>(() => {
    if (initialTabs && initialTabs.length > 0) {
      return initialTabs.map((tab, index) => ({
        id: tab.id || Date.now().toString() + index,
        title: tab.title || "New Tab",
        url: tab.url || initialUrl,
        favicon: tab.favicon,
        isActive: index === 0,
        isLoading: false,
      }))
    }
    return [
      {
        id: "1",
        title: "New Tab",
        url: initialUrl,
        isActive: true,
        isLoading: false,
      },
    ]
  })

  const [currentUrl, setCurrentUrl] = useState(initialUrl)
  const [inputUrl, setInputUrl] = useState(initialUrl)
  const [isSecure, setIsSecure] = useState(true)
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showBookmarks, setShowBookmarks] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  const [bookmarks] = useState<Bookmark[]>(
    customBookmarks || [
      {
        id: "1",
        title: "Google",
        url: "https://www.google.com",
        favicon: "🔍",
      },
      { id: "2", title: "GitHub", url: "https://github.com", favicon: "🐙" },
      {
        id: "3",
        title: "Stack Overflow",
        url: "https://stackoverflow.com",
        favicon: "📚",
      },
      {
        id: "4",
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        favicon: "📖",
      },
    ]
  )

  const [history] = useState<HistoryItem[]>(
    customHistory || [
      {
        id: "1",
        title: "Google",
        url: "https://www.google.com",
        timestamp: new Date(Date.now() - 3600000),
        favicon: "🔍",
      },
      {
        id: "2",
        title: "GitHub",
        url: "https://github.com",
        timestamp: new Date(Date.now() - 7200000),
        favicon: "🐙",
      },
      {
        id: "3",
        title: "Stack Overflow",
        url: "https://stackoverflow.com",
        timestamp: new Date(Date.now() - 10800000),
        favicon: "📚",
      },
    ]
  )

  const activeTab = tabs.find((tab) => tab.isActive)

  useEffect(() => {
    if (autoFocusAddressBar) {
      const addressBar = document.querySelector(
        'input[placeholder*="Search or enter address"]'
      ) as HTMLInputElement
      if (addressBar) {
        addressBar.focus()
      }
    }
  }, [autoFocusAddressBar])

  const createNewTab = () => {
    if (tabs.length >= maxTabs) return

    const newTab: Tab = {
      id: Date.now().toString(),
      title: "New Tab",
      url: "about:blank",
      isActive: true,
      isLoading: false,
    }

    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, isActive: false })).concat(newTab)
    )
    setCurrentUrl("about:blank")
    setInputUrl("")

    onTabCreate?.(newTab)
  }

  const closeTab = (tabId: string) => {
    if (tabs.length === 1) return

    const tabIndex = tabs.findIndex((tab) => tab.id === tabId)
    const wasActive = tabs[tabIndex].isActive

    const newTabs = tabs.filter((tab) => tab.id !== tabId)

    if (wasActive && newTabs.length > 0) {
      const nextActiveIndex = Math.min(tabIndex, newTabs.length - 1)
      newTabs[nextActiveIndex].isActive = true
      setCurrentUrl(newTabs[nextActiveIndex].url)
      setInputUrl(newTabs[nextActiveIndex].url)
    }

    setTabs(newTabs)

    onTabClose?.(tabId)
  }

  const switchTab = (tabId: string) => {
    const newTabs = tabs.map((tab) => ({
      ...tab,
      isActive: tab.id === tabId,
    }))

    const activeTab = newTabs.find((tab) => tab.isActive)
    if (activeTab) {
      setCurrentUrl(activeTab.url)
      setInputUrl(activeTab.url)
    }

    setTabs(newTabs)

    onTabSwitch?.(tabId)
  }

  const navigateToUrl = (url: string) => {
    if (
      !url.startsWith("http://") &&
      !url.startsWith("https://") &&
      !url.startsWith("about:")
    ) {
      url = `https://www.google.com/search?q=${encodeURIComponent(url)}`
    }

    setCurrentUrl(url)
    setInputUrl(url)
    setIsSecure(url.startsWith("https://"))

    setTabs((prev) =>
      prev.map((tab) =>
        tab.isActive
          ? {
              ...tab,
              url,
              title: new URL(url).hostname || "New Tab",
              isLoading: simulateLoading,
            }
          : tab
      )
    )

    const activeTabId = tabs.find((tab) => tab.isActive)?.id || ""
    onNavigate?.(url, activeTabId)

    if (simulateLoading) {
      setTimeout(() => {
        setTabs((prev) =>
          prev.map((tab) => (tab.isActive ? { ...tab, isLoading: false } : tab))
        )
      }, loadingDuration)
    }
  }

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigateToUrl(inputUrl)
  }

  const goBack = () => {
    setCanGoForward(true)
  }

  const goForward = () => {
    setCanGoBack(true)
  }

  const refresh = () => {
    setTabs((prev) =>
      prev.map((tab) => (tab.isActive ? { ...tab, isLoading: true } : tab))
    )

    setTimeout(() => {
      setTabs((prev) =>
        prev.map((tab) => (tab.isActive ? { ...tab, isLoading: false } : tab))
      )
    }, 1000)
  }

  const toggleBookmark = () => {
    const newBookmarkedState = !isBookmarked
    setIsBookmarked(newBookmarkedState)

    onBookmarkToggle?.(currentUrl, newBookmarkedState)
  }

  const simulateDownload = () => {
    onDownload?.(currentUrl)

    if (!enableDownloads) return

    setIsDownloading(true)
    setDownloadProgress(0)

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsDownloading(false)
          return 0
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div
      className={cn(
        "bg-background border-border flex h-full flex-col overflow-hidden rounded-lg border",
        isFullscreen && "fixed inset-0 z-50 rounded-none border-0",
        className
      )}
    >
      {showWindowControls && (
        <div className="bg-muted/50 border-border flex items-center justify-between border-b px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Wifi className="h-4 w-4" />
            <Volume2 className="h-4 w-4" />
            <Battery className="h-4 w-4" />
            <span>
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
            <Button variant="ghost" size="sm">
              <Square className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {enableTabManagement && (
        <div className="bg-muted/30 border-border flex items-center border-b">
          <div className="flex flex-1 items-center overflow-x-auto">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn(
                  "border-border flex max-w-64 min-w-0 cursor-pointer items-center gap-2 border-r px-4 py-2",
                  tab.isActive ? "bg-background" : "hover:bg-muted/50"
                )}
                onClick={() => switchTab(tab.id)}
              >
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  {tab.isLoading ? (
                    <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
                  ) : (
                    <Globe className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                  )}
                  <span className="truncate text-sm">{tab.title}</span>
                </div>
                {tabs.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-muted h-4 w-4 p-0"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeTab(tab.id)
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={createNewTab}
            className="border-border border-l px-3 py-2"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="bg-background border-border flex items-center gap-2 border-b p-2">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            disabled={!canGoBack}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={goForward}
            disabled={!canGoForward}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={refresh}>
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToUrl("about:home")}
          >
            <Home className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleUrlSubmit} className="flex flex-1 items-center">
          <div className="relative flex flex-1 items-center">
            <div className="absolute left-3 flex items-center gap-2">
              {isSecure ? (
                <Lock className="h-4 w-4 text-green-600" />
              ) : (
                <Shield className="text-muted-foreground h-4 w-4" />
              )}
            </div>
            <Input
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Search or enter address"
              className="pr-4 pl-10"
            />
          </div>
        </form>

        <div className="flex items-center gap-1">
          {enableBookmarks && (
            <Button variant="ghost" size="sm" onClick={toggleBookmark}>
              {isBookmarked ? (
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ) : (
                <StarOff className="h-4 w-4" />
              )}
            </Button>
          )}
          {enableDownloads && (
            <Button variant="ghost" size="sm" onClick={simulateDownload}>
              <Download className="h-4 w-4" />
            </Button>
          )}
          {enableSettings && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(!showSettings)}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {showBookmarksBar && enableBookmarks && (
        <div className="bg-muted/20 border-border flex items-center gap-2 border-b px-4 py-1 text-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBookmarks(!showBookmarks)}
            className="text-xs"
          >
            <BookmarkIcon className="mr-1 h-3 w-3" />
            Bookmarks
          </Button>
          {enableHistory && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
              className="text-xs"
            >
              <History className="mr-1 h-3 w-3" />
              History
            </Button>
          )}
          <Separator orientation="vertical" className="h-4" />
          {bookmarks.slice(0, 4).map((bookmark) => (
            <Button
              key={bookmark.id}
              variant="ghost"
              size="sm"
              onClick={() => navigateToUrl(bookmark.url)}
              className="text-xs"
            >
              <span className="mr-1">{bookmark.favicon}</span>
              {bookmark.title}
            </Button>
          ))}
        </div>
      )}

      {isDownloading && enableDownloads && (
        <div className="border-border border-b bg-blue-50 px-4 py-2 dark:bg-blue-950">
          <div className="flex items-center gap-2 text-sm">
            <Download className="h-4 w-4" />
            <span>Downloading file...</span>
            <div className="bg-muted h-2 flex-1 rounded-full">
              <div
                className="h-2 rounded-full bg-blue-600 transition-all duration-200"
                style={{ width: `${downloadProgress}%` }}
              />
            </div>
            <span>{downloadProgress}%</span>
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {showBookmarks && enableBookmarks && (
          <Card className="m-2 mr-0 w-80 overflow-y-auto p-4">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <BookmarkIcon className="h-4 w-4" />
              Bookmarks
            </h3>
            <div className="space-y-2">
              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded p-2"
                  onClick={() => navigateToUrl(bookmark.url)}
                >
                  <span>{bookmark.favicon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">
                      {bookmark.title}
                    </div>
                    <div className="text-muted-foreground truncate text-xs">
                      {bookmark.url}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {showHistory && enableHistory && (
          <Card className="m-2 mr-0 w-80 overflow-y-auto p-4">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <History className="h-4 w-4" />
              History
            </h3>
            <div className="space-y-2">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded p-2"
                  onClick={() => navigateToUrl(item.url)}
                >
                  <span>{item.favicon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground truncate text-xs">
                      {item.url}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {item.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {showSettings && enableSettings && (
          <Card className="m-2 mr-0 w-80 overflow-y-auto p-4">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Settings className="h-4 w-4" />
              Settings
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium">Privacy & Security</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Block pop-ups</span>
                    <Badge variant="secondary">On</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Safe browsing</span>
                    <Badge variant="secondary">Enhanced</Badge>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2 font-medium">Appearance</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Theme</span>
                    <Badge variant="outline">System</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Zoom</span>
                    <Badge variant="outline">100%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        <div className="dark:bg-muted/20 border-border m-2 flex flex-1 flex-col overflow-hidden rounded-md border bg-white">
          {renderContent ? (
            renderContent(currentUrl, activeTab?.isLoading || false)
          ) : currentUrl === "about:blank" || currentUrl === "" ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="space-y-4 text-center">
                <Search className="text-muted-foreground mx-auto h-16 w-16" />
                <h2 className="text-2xl font-semibold">New Tab</h2>
                <p className="text-muted-foreground">
                  Start by searching or entering a web address
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {bookmarks.slice(0, 4).map((bookmark) => (
                    <Card
                      key={bookmark.id}
                      className="hover:bg-muted/50 cursor-pointer p-4 transition-colors"
                      onClick={() => navigateToUrl(bookmark.url)}
                    >
                      <div className="space-y-2 text-center">
                        <div className="text-2xl">{bookmark.favicon}</div>
                        <div className="text-sm font-medium">
                          {bookmark.title}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <Image
                src={image}
                alt={image}
                width={320}
                height={320}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {showStatusBar && (
        <div className="bg-muted/30 border-border text-muted-foreground flex items-center justify-between border-t px-4 py-1 text-xs">
          <div className="flex items-center gap-4">
            <span>Ready</span>
            {isSecure && (
              <span className="flex items-center gap-1">
                <Lock className="h-3 w-3" /> Secure
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span>Zoom: 100%</span>
            <span>
              {tabs.length} tab{tabs.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
