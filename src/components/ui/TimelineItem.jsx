import { formatDateRange } from "../../lib/formatDate";
import { getIcon } from "../../lib/iconMap";
import { Badge } from "./Badge";

export function TimelineItem({
  icon = "Briefcase",
  type,
  title,
  subtitle,
  location,
  startDate,
  endDate,
  description,
  highlights = [],
  isLast = false,
}) {
  const Icon = getIcon(icon);

  return (
    <div className="relative flex gap-6 pb-10">
      {!isLast && (
        <span className="absolute left-5 top-11 h-[calc(100%-1.5rem)] w-px bg-border" aria-hidden="true" />
      )}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon size={18} aria-hidden="true" />
      </span>

      <div className="flex-1 pt-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-heading text-lg font-semibold">{title}</h3>
          {type && <Badge>{type}</Badge>}
        </div>
        <p className="mt-1 text-sm font-medium text-accent">
          {subtitle}
          {location ? ` · ${location}` : ""}
        </p>
        <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
          {formatDateRange(startDate, endDate)}
        </p>
        {description && <p className="mt-3 text-sm text-muted-foreground">{description}</p>}
        {highlights.length > 0 && (
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
            {highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
