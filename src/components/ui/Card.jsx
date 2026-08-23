export function Card({ children, className = "", hoverable = false, as: Component = "div", ...rest }) {
  return (
    <Component
      className={[
        "rounded-card border border-border bg-card text-card-foreground",
        "shadow-sm transition-all duration-300",
        hoverable && "hover:-translate-y-1 hover:shadow-xl hover:border-accent/30",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Component>
  );
}
