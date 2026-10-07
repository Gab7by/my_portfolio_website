import { SECTION_IDS } from "../lib/constants";

export const navLinks = [
  { id: SECTION_IDS.HERO, label: "Home", href: `#${SECTION_IDS.HERO}`, order: 0 },
  { id: SECTION_IDS.ABOUT, label: "About", href: `#${SECTION_IDS.ABOUT}`, order: 1 },
  { id: SECTION_IDS.SKILLS, label: "Skills", href: `#${SECTION_IDS.SKILLS}`, order: 2 },
  { id: SECTION_IDS.SERVICES, label: "Services", href: `#${SECTION_IDS.SERVICES}`, order: 3 },
  { id: SECTION_IDS.PROJECTS, label: "Projects", href: `#${SECTION_IDS.PROJECTS}`, order: 4 },
  { id: SECTION_IDS.EDUCATION, label: "Education", href: `#${SECTION_IDS.EDUCATION}`, order: 5 },
  { id: SECTION_IDS.CONTACT, label: "Contact", href: `#${SECTION_IDS.CONTACT}`, order: 6 },
];
