export function IconButton({
  icon: Icon,
  label,
  className = "",
  size = 20,
  variant = "ghost",
  as: Component = "button",
  ...rest
}) {
  const variantClasses =
    variant === "solid"
      ? "bg-accent text-on-accent hover:bg-accent-soft"
      : "text-foreground hover:bg-muted";

  return (
    <Component
      aria-label={label}
      className={[
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variantClasses,
        className,
      ].join(" ")}
      {...rest}
    >
      <Icon size={size} aria-hidden="true" />
    </Component>
  );
}
