import { stats } from "../../data/stats";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { StatCounter } from "../../components/ui/StatCounter";
import { StaggerContainer, StaggerItem } from "../../components/motion/StaggerContainer";

export function Statistics() {
  return (
    <SectionWrapper id={SECTION_IDS.STATS}>
      <StaggerContainer
        className="grid grid-cols-2 gap-8 rounded-card border border-border bg-card p-8 sm:p-12 md:grid-cols-4"
        staggerDelay={0.1}
      >
        {stats.map((stat) => (
          <StaggerItem key={stat.id}>
            <StatCounter {...stat} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
