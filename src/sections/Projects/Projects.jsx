import { useMemo, useState } from "react";
import { projectCategories, projects } from "../../data/projects";
import { SECTION_IDS } from "../../lib/constants";
import { filterProjectsByCategory } from "../../lib/filterProjects";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ProjectCard } from "../../components/ui/ProjectCard";
import { StaggerContainer, StaggerItem } from "../../components/motion/StaggerContainer";
import { ProjectFilterBar } from "./ProjectFilterBar";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = useMemo(
    () => filterProjectsByCategory(projects, activeCategory),
    [activeCategory]
  );

  return (
    <SectionWrapper id={SECTION_IDS.PROJECTS} muted>
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected projects"
        description="A mix of design, data, and development work — filter by category to explore."
      />

      <ProjectFilterBar
        categories={projectCategories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <StaggerContainer
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.08}
      >
        {filteredProjects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
