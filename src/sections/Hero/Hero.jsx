import { motion, useReducedMotion } from "framer-motion";
import { FolderGit2, Send } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";
import { SECTION_IDS } from "../../lib/constants";
import { scrollToSection } from "../../lib/scrollTo";
import { getIcon } from "../../lib/iconMap";
import { Button } from "../../components/ui/Button";
import { Avatar } from "../../components/ui/Avatar";
import { TypingText } from "./TypingText";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" };

  return (
    <section
      id={SECTION_IDS.HERO}
      className="relative flex min-h-dvh scroll-mt-24 items-center overflow-hidden pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--color-accent)_0%,_transparent_45%)] opacity-10"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-8 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex flex-col items-start gap-6 text-left"
        >
          <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            {personalInfo.availability}
          </span>

          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm {personalInfo.displayName}
          </h1>

          <p className="font-heading text-xl font-medium text-accent sm:text-2xl" aria-live="off">
            <TypingText words={personalInfo.roleTitles} />
          </p>

          <ul className="flex flex-wrap gap-2" aria-label="Who I am">
            {personalInfo.identities.map(({ label, icon }) => {
              const Icon = getIcon(icon);
              return (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent sm:text-sm"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </li>
              );
            })}
          </ul>

          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            {personalInfo.bio.short}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button icon={FolderGit2} iconPosition="left" onClick={() => scrollToSection(SECTION_IDS.PROJECTS)}>
              View Projects
            </Button>
            <Button icon={Send} iconPosition="left" onClick={() => scrollToSection(SECTION_IDS.CONTACT)}>
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="mx-auto flex items-center justify-center"
        >
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-tr from-accent to-accent-soft opacity-30 blur-2xl"
              aria-hidden="true"
            />
            <Avatar
              src={personalInfo.profileImage}
              alt={`Portrait of ${personalInfo.fullName}`}
              size={280}
              className="border-4 border-card shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
