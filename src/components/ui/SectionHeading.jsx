import { FadeInWhenVisible } from "../motion/FadeInWhenVisible";

export function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <FadeInWhenVisible className={`mb-14 flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="text-base text-muted-foreground sm:text-lg">{description}</p>}
    </FadeInWhenVisible>
  );
}
