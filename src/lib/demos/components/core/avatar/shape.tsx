import { Avatar } from "@/lib/components/core/default/avatar";

export default function Demo() {
  return (
    <div className="space-x-4">
      <Avatar src="https://github.com/mehdibha.png" alt="@mehdibha" fallback="M" shape="square" />
      <Avatar src="https://github.com/mehdibha.png" alt="@mehdibha" fallback="M" shape="circle" />
    </div>
  );
}
