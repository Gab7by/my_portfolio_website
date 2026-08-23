import { skills } from "../../data/skills";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { StaggerContainer } from "../../components/motion/StaggerContainer";
import { SkillCategoryGroup } from "./SkillCategoryGroup";

export function Skills() {
  return (
    <SectionWrapper id={SECTION_IDS.SKILLS}>
      <SectionHeading
        eyebrow="Skills"
        title="What I bring to the table"
        description="A blend of creative, analytical, and technical skills honed across three disciplines."
      />

      <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3" staggerDelay={0.15}>
        {skills.map((group) => (
          <SkillCategoryGroup key={group.category} {...group} />
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
