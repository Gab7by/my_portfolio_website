import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { IconButton } from "../../components/ui/IconButton";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { NavLink } from "./NavLink";

export function MobileMenu({ isOpen, onClose, links, activeId }) {
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-heading text-lg font-semibold">Menu</span>
            <IconButton icon={X} label="Close menu" onClick={onClose} />
          </div>
          <motion.nav
            className="flex flex-col items-center gap-8 px-6 pt-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.25 }}
          >
            {links.map((link) => (
              <NavLink
                key={link.id}
                id={link.id}
                label={link.label}
                isActive={activeId === link.id}
                onNavigate={onClose}
                className="text-xl"
              />
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
