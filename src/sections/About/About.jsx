import { personalInfo } from "../../data/personalInfo";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Avatar } from "../../components/ui/Avatar";
import { FadeInWhenVisible } from "../../components/motion/FadeInWhenVisible";

export function About() {
  return (
    <SectionWrapper id={SECTION_IDS.ABOUT} muted>
      <SectionHeading eyebrow="About Me" title="Design. Data. Development." />

      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <FadeInWhenVisible className="mx-auto md:mx-0">
          <Avatar
            src={personalInfo.profileImage}
            alt={`Portrait of ${personalInfo.fullName}`}
            size={320}
            className="border-4 border-card shadow-xl"
          />
        </FadeInWhenVisible>

        <div className="flex flex-col gap-5">
          {personalInfo.bio.long.map((paragraph) => (
            <FadeInWhenVisible key={paragraph.slice(0, 24)} as="p" className="text-base text-muted-foreground sm:text-lg">
              {paragraph}
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
