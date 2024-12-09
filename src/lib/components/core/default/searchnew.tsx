"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && !isOpen) {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.metaKey && event.key === "k") {
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="text-center">
        <Dialog.Trigger asChild>
          <button className="relative inline-flex w-full max-w-xs items-center justify-between whitespace-nowrap rounded-lg border border-slate-300 bg-white py-3.5 pl-4 pr-3 text-sm text-slate-400 outline-none hover:border-slate-400 focus-visible:border-indigo-400 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-indigo-100">
            <div className="flex items-center justify-center">
              <svg
                className="mr-3 h-4 w-4 shrink-0 fill-slate-500"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
              </svg>
              <span>Search</span>
            </div>
            <div className="ml-3 flex gap-1">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-slate-400 shadow-sm">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={11}
                  height={12}
                  fill="none"
                >
                  <path d="M2.277 11.224c-.418 0-.799-.101-1.143-.303a2.343 2.343 0 0 1-.826-.826A2.208 2.208 0 0 1 0 8.952c0-.421.103-.804.308-1.148.206-.345.48-.62.826-.826a2.191 2.191 0 0 1 1.143-.308h1.034V5.139H2.277c-.418 0-.799-.101-1.143-.304a2.357 2.357 0 0 1-.826-.82A2.2 2.2 0 0 1 0 2.867c0-.418.103-.799.308-1.144.206-.344.48-.618.826-.82A2.191 2.191 0 0 1 2.277.595c.418 0 .799.102 1.143.308.345.202.62.476.826.82.209.345.313.726.313 1.144v1.029h1.526v-1.03c0-.417.101-.798.303-1.143.206-.344.481-.618.826-.82A2.2 2.2 0 0 1 8.362.595c.418 0 .799.102 1.144.308.344.202.618.476.82.82.205.345.308.726.308 1.144a2.2 2.2 0 0 1-.308 1.148c-.206.342-.48.615-.825.82-.342.203-.721.304-1.139.304H7.333V6.67h1.03c.417 0 .796.103 1.138.308.344.206.62.48.825.826a2.2 2.2 0 0 1 .308 1.148c0 .414-.103.795-.308 1.143-.206.345-.48.62-.825.826-.342.202-.721.303-1.139.303-.42 0-.804-.101-1.148-.303a2.344 2.344 0 0 1-.826-.826 2.236 2.236 0 0 1-.303-1.143v-1.04H4.56v1.04c0 .414-.104.795-.313 1.143-.206.345-.48.62-.826.826a2.218 2.218 0 0 1-1.143.303Zm0-1.243a1.045 1.045 0 0 0 .895-.512.991.991 0 0 0 .14-.517v-1.04H2.276a.965.965 0 0 0-.517.145c-.156.093-.28.217-.373.373a1 1 0 0 0-.14.522c0 .189.046.361.135.517.093.156.217.28.373.373.16.093.333.14.522.14Zm0-6.085h1.034v-1.03a.975.975 0 0 0-.14-.516 1.045 1.045 0 0 0-.894-.512.991.991 0 0 0-.517.139c-.156.093-.28.217-.373.373a.975.975 0 0 0-.14.517c0 .189.046.363.135.522.093.156.217.28.373.373.16.09.333.134.522.134Zm5.056 0h1.03c.188 0 .36-.045.516-.134.156-.093.279-.217.368-.373a1 1 0 0 0 .14-.522.975.975 0 0 0-.14-.517 1.018 1.018 0 0 0-.885-.512 1 1 0 0 0-.522.139 1.002 1.002 0 0 0-.507.89v1.029Zm1.03 6.085a1.018 1.018 0 0 0 .885-.512.991.991 0 0 0 .138-.517 1 1 0 0 0-.139-.522 1.018 1.018 0 0 0-.368-.373.965.965 0 0 0-.517-.144H7.333v1.039c0 .189.045.361.134.517.093.156.217.28.373.373a1 1 0 0 0 .522.14ZM4.558 6.67h1.526V5.139H4.56V6.67Z" />
                </svg>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-slate-400 shadow-sm">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={8}
                  height={9}
                  fill="none"
                >
                  <path d="M0 8.727V0h1.581v4.01h.107L5.091 0h1.93L3.649 3.916l3.405 4.811H5.152L2.548 4.986l-.967 1.142v2.6H0Z" />
                </svg>
              </div>
            </div>
          </button>
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] overflow-hidden border bg-white shadow-lg duration-200 sm:rounded-lg">
          <VisuallyHidden.Root>
            <Dialog.Title>Search</Dialog.Title>
            <Dialog.Description>
              Start typing to search the documentation
            </Dialog.Description>
          </VisuallyHidden.Root>
          <form className="border-b border-slate-200">
            <div className="flex items-center">
              <VisuallyHidden.Root>
                <label htmlFor="search-modal">Search</label>
              </VisuallyHidden.Root>
              <svg
                className="ml-4 h-4 w-4 shrink-0 fill-slate-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
              </svg>
              <input
                id="search-modal"
                className="[&::-webkit-search-decoration]:none [&::-webkit-search-results-button]:none [&::-webkit-search-results-decoration]:none [&::-webkit-search-cancel-button]:hidden w-full appearance-none border-0 bg-white py-3 pl-2 pr-4 text-sm placeholder-slate-400 text-black focus:outline-none"
                type="search"
                placeholder="Search"
              />
            </div>
          </form>
          <ScrollArea.Root className="max-h-[calc(85vh-44px)]">
            <ScrollArea.Viewport className="h-full w-full">
              <div className="space-y-4 px-2 py-4">
                <div>
                  <div className="mb-2 px-2 text-xs font-semibold uppercase text-gray-400">
                    Recent
                  </div>
                  <ul>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Alternative Schemas</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Query string parameters</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Integrations</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Organize Contacts with Tags</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="mb-2 px-2 text-xs font-semibold uppercase text-gray-400">
                    Suggestions
                  </div>
                  <ul>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Flexbox and Grid</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>API Reference</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Authentication</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex h-full w-2 touch-none select-none border-l border-l-transparent p-[1px] transition-colors"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-full bg-slate-300" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="flex h-2.5 touch-none select-none flex-col border-t border-t-transparent p-[1px] transition-colors"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-full bg-slate-300" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA5" />
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}