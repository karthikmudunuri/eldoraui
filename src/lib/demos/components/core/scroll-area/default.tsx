import * as React from "react";
import { ScrollArea } from "@/lib/components/core/default/scroll-area";

export default function Demo() {
  return (
    <div className="rounded-md border p-6">
      <ScrollArea className="h-72 w-full max-w-sm" type="always">
        <div className="space-y-4 p-4 pr-8">
          <h4 className="text-md font-bold">Principles of the typographic craft</h4>
          <p>
            Three fundamental aspects of typography are legibility, readability, and aesthetics.
            Although in a non-technical sense “legible” and “readable” are often used synonymously,
            typographically they are separate but related concepts.
          </p>
          <p>
            Legibility describes how easily individual characters can be distinguished from one
            another. It is described by Walter Tracy as “the quality of being decipherable and
            recognisable”. For instance, if a “b” and an “h”, or a “3” and an “8”, are difficult to
            distinguish at small sizes, this is a problem of legibility.
          </p>
          <p>
            Typographers are concerned with legibility insofar as it is their job to select the
            correct font to use. Brush Script is an example of a font containing many characters
            that might be difficult to distinguish. The selection of cases influences the legibility
            of typography because using only uppercase letters (all-caps) reduces legibility.
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}
