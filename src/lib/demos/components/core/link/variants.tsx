import { Link } from "@/lib/components/core/default/link";

export default function Demo() {
  return (
    <div className="space-y-2">
      {(["accent", "quiet"] as const).map((variant, index) => (
        <p key={index}>
          Follow{" "}
          <Link variant={variant} href="https://x.com/mehdibha_" target="_blank">
            @mehdibha_
          </Link>{" "}
          to stay updated on dotUI latest releases.
        </p>
      ))}
    </div>
  );
}
