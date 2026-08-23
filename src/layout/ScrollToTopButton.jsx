import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { IconButton } from "../components/ui/IconButton";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <IconButton
      icon={ArrowUp}
      label="Back to top"
      variant="solid"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-30 shadow-lg"
    />
  );
}
