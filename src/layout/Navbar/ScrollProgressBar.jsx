import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-soft transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
