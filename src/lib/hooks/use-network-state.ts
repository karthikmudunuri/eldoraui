// import React from "react";

// type NetworkState = {
//   online: boolean;
//   downlink: number | null;
//   downlinkMax: number | null;
//   effectiveType: string | null;
//   rtt: number | null;
//   saveData: boolean | null;
//   type: string | null;
// };

// function isShallowEqual(object1: any, object2: any) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// const getConnection = () => {
//   return navigator?.connection || navigator?.mozConnection || navigator?.webkitConnection;
// };

// const useNetworkStateSubscribe = (callback: () => void) => {
//   window.addEventListener("online", callback, { passive: true });
//   window.addEventListener("offline", callback, { passive: true });

//   const connection = getConnection();

//   if (connection) {
//     connection.addEventListener("change", callback, { passive: true });
//   }

//   return () => {
//     window.removeEventListener("online", callback);
//     window.removeEventListener("offline", callback);

//     if (connection) {
//       connection.removeEventListener("change", callback);
//     }
//   };
// };

// const getNetworkStateServerSnapshot = () => {
//   throw Error("useNetworkState is a client-only hook");
// };

export function useNetworkState() {
  // const cache = React.useRef({});
  // const getSnapshot = (): NetworkState => {
  //   const online = navigator.onLine;
  //   const connection = getConnection();
  //   const nextState = {
  //     online,
  //     downlink: connection?.downlink,
  //     downlinkMax: connection?.downlinkMax,
  //     effectiveType: connection?.effectiveType,
  //     rtt: connection?.rtt,
  //     saveData: connection?.saveData,
  //     type: connection?.type,
  //   };
  //   if (isShallowEqual(cache.current, nextState)) {
  //     return cache.current;
  //   } else {
  //     cache.current = nextState;
  //     return nextState;
  //   }
  // };
  // return React.useSyncExternalStore<NetworkState>(
  //   useNetworkStateSubscribe,
  //   getSnapshot,
  //   getNetworkStateServerSnapshot
  // );
}
