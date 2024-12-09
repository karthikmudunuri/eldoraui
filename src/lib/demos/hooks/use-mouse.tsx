"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/components/core/default/table";
import { useMouse } from "@/lib/hooks/use-mouse";
import { cn } from "@/lib/utils/classes";

export default function Demo() {
  const [mouse, ref] = useMouse<HTMLDivElement>();

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < 300;
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < 300;
  const isIntersecting = xIntersecting && yIntersecting;

  return (
    <div>
      <div className="mx-auto flex rounded-lg border bg-bg-muted py-4">
        {[
          {
            caption: "Mouse Position",
            headers: ["X", "Y"],
            rows: [[mouse.x, mouse.y]],
          },
          {
            caption: "Relative to ref",
            headers: ["ElementX", "ElementY"],
            rows: [[mouse.elementX, mouse.elementY]],
          },
        ].map(({ caption, headers, rows }) => (
          <Table key={caption} className="mx-auto">
            <TableCaption>{caption}</TableCaption>
            <TableHeader>
              <TableRow>
                {headers.map((header, i) => (
                  <TableHead key={i} className="w-[100px]">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  {row.map((cell, j) => (
                    <TableCell key={j} className="max-w-[50px] truncate">
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ))}
      </div>
      <div
        ref={ref}
        className={cn(
          "bg-background mx-auto mt-4 flex h-[200px] w-full max-w-sm items-center justify-center rounded-lg border p-4 transition-colors",
          isIntersecting && "bg-green-900"
        )}
      >
        <span>Use a ref to add coords relative to the element</span>
      </div>
    </div>
  );
}
