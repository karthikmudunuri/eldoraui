"use client"

import { useCallback, useEffect, useState } from "react"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const themes = [
  {
    key: "system",
    icon: MonitorIcon,
    label: "System theme",
  },
  {
    key: "light",
    icon: SunIcon,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: MoonIcon,
    label: "Dark theme",
  },
]

export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system"
  onChange?: (theme: "light" | "dark" | "system") => void
  defaultValue?: "light" | "dark" | "system"
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const handleThemeClick = useCallback(
    (themeKey: "light" | "dark" | "system") => {
      setTheme(themeKey)
    },
    [setTheme]
  )

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cn(
        "bg-background ring-border relative isolate flex h-7 rounded-full p-1 ring-1",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key

        return (
          <button
            aria-label={label}
            className="relative h-5 w-6 rounded-full"
            key={key}
            onClick={() => handleThemeClick(key as "light" | "dark" | "system")}
            type="button"
          >
            {isActive && (
              <div className="bg-secondary absolute inset-0 rounded-full" />
            )}
            <Icon
              className={cn(
                "relative z-10 m-auto h-3.5 w-3.5",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
