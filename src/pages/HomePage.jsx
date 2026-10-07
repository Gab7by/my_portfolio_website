import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../layout/ScrollToTopButton";
import { Hero } from "../sections/Hero/Hero";
import { About } from "../sections/About/About";
import { Skills } from "../sections/Skills/Skills";
import { Services } from "../sections/Services/Services";
import { Statistics } from "../sections/Statistics/Statistics";
import { Projects } from "../sections/Projects/Projects";
import { Education } from "../sections/Education/Education";
import { Contact } from "../sections/Contact/Contact";

export function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Statistics />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
