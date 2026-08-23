import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, reducedMotionVariants, staggerContainer } from "./variants";

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={
        shouldReduceMotion ? reducedMotionVariants : staggerContainer(staggerDelay)
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, variants, ...rest }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={shouldReduceMotion ? reducedMotionVariants : variants ?? fadeInUp}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
