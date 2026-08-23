const VARIANT_CLASSES = {
  primary:
    "bg-accent text-on-accent hover:bg-accent-soft shadow-lg shadow-accent/20",
  secondary:
    "bg-primary text-on-primary hover:opacity-90",
  outline:
    "border border-border text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon: Icon,
  iconPosition = "right",
  ...rest
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-all duration-200 ease-out active:scale-95",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(" ");

  return (
    <Component className={classes} {...rest}>
      {Icon && iconPosition === "left" && <Icon size={18} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} aria-hidden="true" />}
    </Component>
  );
}
