import { motion, useReducedMotion } from "framer-motion";
import { getIcon } from "../../lib/iconMap";

export function SkillBar({ name, icon, proficiency, level }) {
  const Icon = getIcon(icon);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-sm font-medium sm:text-base">
          <Icon size={18} className="text-accent" aria-hidden="true" />
          {name}
        </span>
        <span className="text-xs text-muted-foreground">{level}</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency: ${proficiency}%`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
