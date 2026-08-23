export function TimelineGroupTabs({ types, activeType, onSelect }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filter experience by type">
      {types.map((type) => {
        const isActive = type === activeType;
        return (
          <button
            key={type}
            type="button"
            onClick={() => onSelect(type)}
            aria-pressed={isActive}
            className={[
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              isActive
                ? "border-accent bg-accent text-on-accent"
                : "border-border text-foreground hover:border-accent hover:text-accent",
            ].join(" ")}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}
