"use client"

import React from "react"

import { FishyButton } from "@/registry/eldoraui/fishy-button"

export default function FishyButtonDemo2() {
  return (
    <div className="bg-transparent p-2">
      <FishyButton
        type="button"
        className="button--2"
        fontFamily="'Roboto Mono', monospace"
        borderRadius="40px"
        width="200px"
        onClick={() => console.log("Roboto Mono clicked")}
      >
        Two
      </FishyButton>
    </div>
  )
}
