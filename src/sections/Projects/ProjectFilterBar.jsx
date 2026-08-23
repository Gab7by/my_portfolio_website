export function ProjectFilterBar({ categories, activeCategory, onSelect }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            aria-pressed={isActive}
            className={[
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              isActive
                ? "border-accent bg-accent text-on-accent"
                : "border-border text-foreground hover:border-accent hover:text-accent",
            ].join(" ")}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
