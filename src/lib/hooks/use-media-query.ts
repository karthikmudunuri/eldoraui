import * as React from "react";

export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}
// import React from "react";

// export function useMediaQuery(query: string): boolean {
//   const subscribe = React.useCallback(
//     (callback: (ev: MediaQueryListEvent) => void) => {
//       const matchMedia = window.matchMedia(query);
//       matchMedia.addEventListener("change", callback);
//       return () => {
//         matchMedia.removeEventListener("change", callback);
//       };
//     },
//     [query]
//   );

//   const getSnapshot = () => {
//     return window.matchMedia(query).matches;
//   };

//   const getServerSnapshot = () => {
//     throw Error("useMediaQuery is a client-only hook");
//   };

//   return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
// }
