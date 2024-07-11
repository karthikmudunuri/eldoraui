import React from "react";

type CustomList<T> = {
  set: (l: T[]) => void;
  push: (element: T) => void;
  removeAt: (index: number) => void;
  insertAt: (index: number, element: T) => void;
  updateAt: (index: number, element: T) => void;
  clear: () => void;
};

export function useList<T>(defaultList: T[] = []): [T[], CustomList<T>] {
  const [list, setList] = React.useState<T[]>(defaultList);

  const set = React.useCallback((l: T[]) => {
    setList(l);
  }, []);

  const push = React.useCallback((element: T) => {
    setList((l) => [...l, element]);
  }, []);

  const removeAt = React.useCallback((index: number) => {
    setList((l) => [...l.slice(0, index), ...l.slice(index + 1)]);
  }, []);

  const insertAt = React.useCallback((index: number, element: T) => {
    setList((l) => [...l.slice(0, index), element, ...l.slice(index)]);
  }, []);

  const updateAt = React.useCallback((index: number, element: T) => {
    setList((l) => l.map((e, i) => (i === index ? element : e)));
  }, []);

  const clear = React.useCallback(() => setList([]), []);

  return [list, { set, push, removeAt, insertAt, updateAt, clear }];
}
