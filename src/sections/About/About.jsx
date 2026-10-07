import { Rocket } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";
import { focusAreas, visionIntro, visionStatement } from "../../data/vision";
import { SECTION_IDS } from "../../lib/constants";
import { getIcon } from "../../lib/iconMap";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Avatar } from "../../components/ui/Avatar";
import { Card } from "../../components/ui/Card";
import { FadeInWhenVisible } from "../../components/motion/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "../../components/motion/StaggerContainer";

export function About() {
  return (
    <SectionWrapper id={SECTION_IDS.ABOUT} muted>
      <SectionHeading eyebrow="About Me" title="Where Laboratory Science Meets AI" />

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

      <div className="mt-20 flex flex-col gap-10">
        <FadeInWhenVisible className="flex max-w-2xl flex-col gap-4">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            My Passion &amp; Vision
          </span>
          <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">AI for better healthcare</h3>
          <p className="text-base text-muted-foreground sm:text-lg">{visionIntro}</p>
        </FadeInWhenVisible>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {focusAreas.map((area) => {
            const Icon = getIcon(area.icon);
            return (
              <StaggerItem key={area.id}>
                <Card hoverable className="flex h-full flex-col gap-4 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h4 className="font-heading text-lg font-semibold">{area.title}</h4>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeInWhenVisible>
          <Card className="flex flex-col gap-4 border-l-4 border-l-accent p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Rocket size={22} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-2">
              <h4 className="font-heading text-lg font-semibold">My Vision</h4>
              <p className="text-base text-muted-foreground sm:text-lg">{visionStatement}</p>
            </div>
          </Card>
        </FadeInWhenVisible>
      </div>
    </SectionWrapper>
  );
}
