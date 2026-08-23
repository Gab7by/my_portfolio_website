import { education } from "../../data/education";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { TimelineItem } from "../../components/ui/TimelineItem";
import { FadeInWhenVisible } from "../../components/motion/FadeInWhenVisible";

const TYPE_ICONS = {
  Degree: "GraduationCap",
  Certification: "BadgeCheck",
};

export function Education() {
  return (
    <SectionWrapper id={SECTION_IDS.EDUCATION} muted>
      <SectionHeading
        eyebrow="Education"
        title="Academic background & certifications"
        description="The foundation and continuous learning behind my work."
      />

      <div className="mx-auto max-w-3xl">
        {education.map((item, index) => (
          <FadeInWhenVisible key={item.id}>
            <TimelineItem
              icon={TYPE_ICONS[item.type]}
              type={item.type}
              title={item.title}
              subtitle={item.institution}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              isLast={index === education.length - 1}
            />
          </FadeInWhenVisible>
        ))}
      </div>
    </SectionWrapper>
  );
}
