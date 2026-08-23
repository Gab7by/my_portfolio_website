import { useMemo, useState } from "react";
import { experience, experienceTypes } from "../../data/experience";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { TimelineItem } from "../../components/ui/TimelineItem";
import { FadeInWhenVisible } from "../../components/motion/FadeInWhenVisible";
import { TimelineGroupTabs } from "./TimelineGroupTabs";

const TYPE_ICONS = {
  Professional: "Briefcase",
  Freelance: "Rocket",
  Research: "FlaskConical",
  Certification: "BadgeCheck",
  Internship: "GraduationCap",
};

export function Experience() {
  const [activeType, setActiveType] = useState("All");

  const filtered = useMemo(() => {
    const sorted = [...experience].sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
    return activeType === "All" ? sorted : sorted.filter((item) => item.type === activeType);
  }, [activeType]);

  return (
    <SectionWrapper id={SECTION_IDS.EXPERIENCE}>
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        description="Professional roles, freelance work, research, and certifications along the way."
      />

      <TimelineGroupTabs types={experienceTypes} activeType={activeType} onSelect={setActiveType} />

      <div className="mx-auto max-w-3xl">
        {filtered.map((item, index) => (
          <FadeInWhenVisible key={item.id}>
            <TimelineItem
              icon={TYPE_ICONS[item.type]}
              type={item.type}
              title={item.role}
              subtitle={item.organization}
              location={item.location}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              highlights={item.highlights}
              isLast={index === filtered.length - 1}
            />
          </FadeInWhenVisible>
        ))}
      </div>
    </SectionWrapper>
  );
}
