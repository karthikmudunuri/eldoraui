import { DatePicker } from "@/lib/components/core/default/date-picker";
import { UsersIcon } from "@/lib/icons";

export default function Demo() {
  return <DatePicker aria-label="Meeting date" prefix={<UsersIcon />} />;
}
