export function SectionWrapper({ id, children, className = "", muted = false }) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-24 py-20 sm:py-28",
        muted ? "bg-muted/40" : "",
        className,
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">{children}</div>
    </section>
  );
}
