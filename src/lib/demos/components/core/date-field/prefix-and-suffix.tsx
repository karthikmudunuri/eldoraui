import { DateField } from "@/lib/components/core/default/date-field";
import { CalendarIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <div className="space-y-2">
      <DateField aria-label="Meeting date" prefix={<CalendarIcon />} />
      <DateField aria-label="Meeting date" suffix={<CalendarIcon />} />
    </div>
  );
}
