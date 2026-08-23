import { getIcon } from "../../lib/iconMap";
import { useCountUp } from "../../hooks/useCountUp";

export function StatCounter({ label, value, suffix = "", icon }) {
  const Icon = getIcon(icon);
  const { ref, value: animatedValue } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon size={22} aria-hidden="true" />
      </span>
      <p className="font-heading text-4xl font-bold tabular-nums sm:text-5xl">
        {animatedValue}
        {suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
