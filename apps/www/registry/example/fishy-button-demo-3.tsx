"use client"

import React from "react"

import { FishyButton } from "@/registry/eldoraui/fishy-button"

export default function FishyButtonDemo3() {
  return (
    <div className="bg-transparent p-2">
      <FishyButton
        type="button"
        className="button--3"
        width="216px"
        fishSpeed="6s"
        fontFamily="'Griffy', cursive"
        borderRadius="50px"
        onClick={() => console.log("Slow fish clicked")}
      >
        שלוש
      </FishyButton>
    </div>
  )
}
