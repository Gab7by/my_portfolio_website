import { navLinks } from "../data/navLinks";
import { personalInfo } from "../data/personalInfo";
import { socials } from "../data/socials";
import { scrollToSection } from "../lib/scrollTo";
import { SocialIconLink } from "../components/ui/SocialIconLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-heading text-xl font-bold">{personalInfo.displayName}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{personalInfo.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {personalInfo.fullName}. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <SocialIconLink key={social.id} {...social} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
