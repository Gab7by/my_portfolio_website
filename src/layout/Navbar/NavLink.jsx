import { scrollToSection } from "../../lib/scrollTo";

export function NavLink({ id, label, isActive, onNavigate, className = "" }) {
  const handleClick = (event) => {
    event.preventDefault();
    scrollToSection(id);
    onNavigate?.();
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      aria-current={isActive ? "true" : undefined}
      className={[
        "relative text-sm font-medium transition-colors duration-200",
        isActive ? "text-accent" : "text-foreground/80 hover:text-foreground",
        className,
      ].join(" ")}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-accent" aria-hidden="true" />
      )}
    </a>
  );
}
