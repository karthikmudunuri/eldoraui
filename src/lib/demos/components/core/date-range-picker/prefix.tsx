import { DateRangePicker } from "@/lib/components/core/default/date-range-picker";
import { PlaneIcon } from "@/lib/icons";

export default function Demo() {
  return <DateRangePicker aria-label="Trip" prefix={<PlaneIcon />} />;
}
