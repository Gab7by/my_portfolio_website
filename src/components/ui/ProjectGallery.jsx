import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "./IconButton";

export function ProjectGallery({ images, mobileImage, url }) {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const count = images.length;
  const go = (step) => setActive((index) => (index + step + count) % count);
  const domain = url ? new URL(url).hostname.replace(/^www\./, "") : "";

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div className="overflow-hidden rounded-card border border-border bg-card shadow-lg">
          <div className="flex items-center gap-3 border-b border-border bg-muted px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </span>
            <span className="truncate rounded-full bg-card px-3 py-0.5 text-xs text-muted-foreground">{domain}</span>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.img
                key={images[active].src}
                src={images[active].src}
                alt={images[active].alt}
                width={1600}
                height={1000}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
              />
            </AnimatePresence>

            {count > 1 && (
              <div className="absolute bottom-3 left-3 flex gap-2">
                <IconButton
                  icon={ChevronLeft}
                  label="Previous screenshot"
                  onClick={() => go(-1)}
                  className="bg-card/90 shadow-md backdrop-blur hover:bg-card"
                />
                <IconButton
                  icon={ChevronRight}
                  label="Next screenshot"
                  onClick={() => go(1)}
                  className="bg-card/90 shadow-md backdrop-blur hover:bg-card"
                />
              </div>
            )}
          </div>
        </div>

        {mobileImage && (
          <div className="absolute -bottom-6 -right-3 hidden w-[22%] max-w-[150px] overflow-hidden rounded-[1.25rem] border-4 border-card bg-card shadow-2xl md:block">
            <img
              src={mobileImage.src}
              alt={mobileImage.alt}
              width={600}
              height={1298}
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        )}
      </div>

      {count > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 md:pr-[24%]" role="group" aria-label="Choose screenshot">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show screenshot ${index + 1}: ${image.alt}`}
              aria-current={index === active}
              className={[
                "h-12 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                index === active ? "border-accent" : "border-transparent opacity-60 hover:opacity-100",
              ].join(" ")}
            >
              <img src={image.src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
