import { Avatar } from "@/lib/components/core/default/avatar";

export default function Demo() {
  return (
    <div className="space-x-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Avatar
          key={size}
          size={size}
          src="https://github.com/mehdibha.png"
          alt="@mehdibha"
          fallback="M"
        />
      ))}
    </div>
  );
}
