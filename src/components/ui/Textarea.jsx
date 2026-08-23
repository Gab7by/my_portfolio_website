export function Textarea({ id, error = false, rows = 5, className = "", ...rest }) {
  return (
    <textarea
      id={id}
      rows={rows}
      aria-invalid={error || undefined}
      className={[
        "resize-none rounded-lg border bg-card px-4 py-2.5 text-sm text-card-foreground",
        "placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        error ? "border-destructive" : "border-border",
        className,
      ].join(" ")}
      {...rest}
    />
  );
}
