"use client";

import {
  BatteryChargingIcon,
  BatteryFullIcon,
  BatteryLowIcon,
  BatteryMediumIcon,
  BatteryWarning,
  Loader2Icon,
} from "lucide-react";
import { useBattery } from "@/lib/hooks/use-battery";

export default function Demo() {
  const { isLoading, isSupported, isCharging, level } = useBattery();

  const size = 120;

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">Battery status</h2>
      <div className="mt-4 flex items-center justify-center space-x-4">
        {isLoading ? (
          <Loader2Icon className="animate-spin" />
        ) : !isSupported ? (
          <p className="text-fg-muted">Battery status API is not supported in your browser.</p>
        ) : (
          <>
            <span className="text-5xl font-bold">{Math.round(level * 100)}%</span>
            {isCharging ? (
              <BatteryChargingIcon size={size} />
            ) : level === 1 ? (
              <BatteryFullIcon size={size} />
            ) : level > 0.5 ? (
              <BatteryMediumIcon size={size} />
            ) : level > 0.2 ? (
              <BatteryLowIcon size={size} />
            ) : (
              <BatteryWarning size={size} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
