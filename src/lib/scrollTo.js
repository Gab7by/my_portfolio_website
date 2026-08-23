import { NAVBAR_HEIGHT_PX } from "./constants";

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT_PX;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}
