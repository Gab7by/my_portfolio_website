import { getIcon } from "../../lib/iconMap";

export function SocialIconLink({ icon, url, ariaLabel, className = "" }) {
  const Icon = getIcon(icon);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={[
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border",
        "text-foreground transition-colors duration-200 hover:border-accent hover:text-accent",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      ].join(" ")}
    >
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}
