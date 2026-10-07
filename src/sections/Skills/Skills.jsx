import { skills } from "../../data/skills";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { StaggerContainer } from "../../components/motion/StaggerContainer";
import { SkillCategoryGroup } from "./SkillCategoryGroup";
import { AiSpotlight } from "./AiSpotlight";

export function Skills() {
  return (
    <SectionWrapper id={SECTION_IDS.SKILLS}>
      <SectionHeading
        eyebrow="Skills"
        title="What I bring to the table"
        description="Where medical laboratory science, artificial intelligence, data, and software development come together."
      />

      <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3" staggerDelay={0.15}>
        <AiSpotlight />
        {skills.map((group) => (
          <SkillCategoryGroup key={group.category} {...group} />
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
