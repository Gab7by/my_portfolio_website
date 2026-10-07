import { Award, GraduationCap } from "lucide-react";
import { degree, training } from "../../data/education";
import { SECTION_IDS } from "../../lib/constants";
import { getIcon } from "../../lib/iconMap";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { FadeInWhenVisible } from "../../components/motion/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "../../components/motion/StaggerContainer";

export function Education() {
  return (
    <SectionWrapper id={SECTION_IDS.EDUCATION}>
      <SectionHeading
        eyebrow="Education"
        title="Education & training"
        description="A healthcare science foundation, strengthened by practical training in software and data."
      />

      <div className="mx-auto max-w-4xl">
        <FadeInWhenVisible>
          <Card className="flex flex-col gap-6 border-t-4 border-t-accent p-6 sm:p-8 md:flex-row md:items-start md:p-10">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <GraduationCap size={30} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-3">
              <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">Degree</span>
              <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">{degree.title}</h3>
              <p className="font-medium text-accent">{degree.institution}</p>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-on-accent shadow-lg shadow-accent/20">
                <Award size={16} aria-hidden="true" />
                {degree.honours}
              </span>
              <p className="mt-1 text-base text-muted-foreground">{degree.description}</p>
            </div>
          </Card>
        </FadeInWhenVisible>

        <div className="my-10 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-border" />
          <span className="text-center text-sm font-medium text-muted-foreground">
            Complemented by hands-on tech training
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2" staggerDelay={0.1}>
          {training.map((program) => {
            const Icon = getIcon(program.icon);
            return (
              <StaggerItem key={program.id}>
                <Card hoverable className="flex h-full flex-col gap-4 p-6 sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
                      {program.institution}
                    </span>
                    <h3 className="font-heading text-lg font-semibold">{program.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Skills gained">
                    {program.skills.map((skill) => (
                      <li key={skill}>
                        <Badge>{skill}</Badge>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
