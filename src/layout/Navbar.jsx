import { useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "../data/navLinks";
import { personalInfo } from "../data/personalInfo";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { scrollToSection } from "../lib/scrollTo";
import { IconButton } from "../components/ui/IconButton";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { NavLink } from "./Navbar/NavLink";
import { MobileMenu } from "./Navbar/MobileMenu";
import { ScrollProgressBar } from "./Navbar/ScrollProgressBar";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 sm:px-8">
          <a
            href={`#${sectionIds[0]}`}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(sectionIds[0]);
            }}
            className="font-heading text-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {personalInfo.displayName}
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink key={link.id} id={link.id} label={link.label} isActive={activeId === link.id} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <IconButton
              icon={Menu}
              label="Open menu"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          </div>
        </div>

        <ScrollProgressBar />
      </header>

      {/* Rendered outside <header> because backdrop-blur establishes a new
          containing block, which would break this element's fixed inset-0 sizing. */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        activeId={activeId}
      />
    </>
  );
}
