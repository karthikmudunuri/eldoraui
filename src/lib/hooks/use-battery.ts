import React from "react";

interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
}

type NavigatorWithBattery = Navigator & {
  getBattery: () => Promise<BatteryManager>;
};

export function useBattery() {
  const [state, setState] = React.useState<{
    isSupported: boolean;
    isLoading: boolean;
    isCharging: boolean;
    level: number;
    chargingTime: number;
    dischargingTime: number;
  }>({
    isSupported: false,
    isLoading: true,
    isCharging: false,
    level: 1,
    chargingTime: 0,
    dischargingTime: 0,
  });

  React.useEffect(() => {
    if (!(navigator as NavigatorWithBattery).getBattery) {
      setState((s) => ({
        ...s,
        isSupported: false,
        isLoading: false,
      }));
      return;
    }

    let battery: BatteryManager | null;

    const handleChange = () => {
      if (!battery) return;
      setState({
        isSupported: true,
        isLoading: false,
        level: battery.level,
        isCharging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    };

    void (navigator as NavigatorWithBattery).getBattery().then((b) => {
      battery = b;
      handleChange();

      b.addEventListener("levelchange", handleChange);
      b.addEventListener("chargingchange", handleChange);
      b.addEventListener("chargingtimechange", handleChange);
      b.addEventListener("dischargingtimechange", handleChange);
    });

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", handleChange);
        battery.removeEventListener("chargingchange", handleChange);
        battery.removeEventListener("chargingtimechange", handleChange);
        battery.removeEventListener("dischargingtimechange", handleChange);
      }
    };
  }, []);

  return state;
}
