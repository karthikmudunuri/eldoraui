"use client"

import React from "react"

import { FishyButton } from "@/registry/eldoraui/fishy-button"

export default function FishyButtonDemo() {
  return (
    <div className="bg-transparent p-2">
      <FishyButton
        type="button"
        className="button--1"
        onClick={() => console.log("Ekhad button clicked")}
      >
        Ekhad
      </FishyButton>
    </div>
  )
}
