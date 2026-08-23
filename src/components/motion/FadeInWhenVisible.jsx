import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, reducedMotionVariants } from "./variants";

export function FadeInWhenVisible({
  children,
  className,
  delay = 0,
  variants,
  as = "div",
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  const baseVariants = shouldReduceMotion
    ? reducedMotionVariants
    : variants ?? fadeInUp;
  const appliedVariants = delay
    ? {
        hidden: baseVariants.hidden,
        visible: {
          ...baseVariants.visible,
          transition: { ...baseVariants.visible.transition, delay },
        },
      }
    : baseVariants;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={appliedVariants}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
