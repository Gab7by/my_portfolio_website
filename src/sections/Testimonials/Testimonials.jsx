import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { IconButton } from "../../components/ui/IconButton";
import { TestimonialCard } from "../../components/ui/TestimonialCard";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (nextIndex, dir) => {
    setDirection(dir);
    setIndex((nextIndex + testimonials.length) % testimonials.length);
  };

  return (
    <SectionWrapper id={SECTION_IDS.TESTIMONIALS}>
      <SectionHeading
        eyebrow="Testimonials"
        title="What people say"
        description="Feedback from clients and collaborators I've had the pleasure to work with."
      />

      <div className="relative flex items-center justify-center gap-4">
        <IconButton
          icon={ChevronLeft}
          label="Previous testimonial"
          onClick={() => goTo(index - 1, -1)}
          className="hidden shrink-0 border border-border sm:inline-flex"
        />

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonials[index].id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <TestimonialCard testimonial={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <IconButton
          icon={ChevronRight}
          label="Next testimonial"
          onClick={() => goTo(index + 1, 1)}
          className="hidden shrink-0 border border-border sm:inline-flex"
        />
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
        <IconButton icon={ChevronLeft} label="Previous testimonial" onClick={() => goTo(index - 1, -1)} className="border border-border" />
        <IconButton icon={ChevronRight} label="Next testimonial" onClick={() => goTo(index + 1, 1)} className="border border-border" />
      </div>

      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Select testimonial">
        {testimonials.map((testimonial, dotIndex) => (
          <button
            key={testimonial.id}
            role="tab"
            aria-selected={dotIndex === index}
            aria-label={`Show testimonial ${dotIndex + 1} of ${testimonials.length}`}
            onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
            className={[
              "h-2 rounded-full transition-all duration-200",
              dotIndex === index ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-foreground",
            ].join(" ")}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
