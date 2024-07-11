"use client";

import React from "react";
import { EditIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/lib/components/core/default/button";
import { Input } from "@/lib/components/core/default/input";
import { useList } from "@/lib/hooks/use-list";

export default function Demo() {
  const [inputValue, setInputValue] = React.useState("");
  const [list, { set, push, removeAt, insertAt, clear }] = useList<string | number>([
    "First",
    "Second",
    "Third",
  ]);

  return (
    <div>
      <div className="flex gap-2">
        <Button isDisabled={list.length < 1} onPress={() => insertAt(1, "woo")}>
          Insert After First
        </Button>
        <Button isDisabled={list.length < 2} onPress={() => removeAt(1)}>
          Remove Second Item
        </Button>
        <Button onPress={() => set([1, 2, 3])}>Reset</Button>
        <Button onPress={() => clear()}>Clear</Button>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Button onPress={() => push(inputValue)}>Add</Button>
        </div>
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-background group relative flex h-10 items-center rounded-md border px-2"
          >
            <div className="mr-2">{item}</div>
            <div className="absolute right-3 top-[50%] flex translate-y-[-50%] items-center space-x-2 opacity-0 duration-100 group-hover:opacity-100">
              <Button variant="quiet" size="sm" shape="square">
                <EditIcon size={15} />
              </Button>
              <Button
                variant="quiet"
                size="sm"
                shape="square"
                onPress={() => {
                  removeAt(index);
                }}
              >
                <Trash2Icon size={15} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
