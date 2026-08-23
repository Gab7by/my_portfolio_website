import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personalInfo } from "../data/personalInfo";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.span
            className="font-heading text-2xl font-bold tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {personalInfo.displayName}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
