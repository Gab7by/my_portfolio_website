export function Spinner({ size = 24, className = "" }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={["inline-block animate-spin rounded-full border-2 border-border border-t-accent", className].join(" ")}
      style={{ width: size, height: size }}
    />
  );
}
