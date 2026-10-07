import { projects } from "../../data/projects";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ProjectCard } from "../../components/ui/ProjectCard";
import { FadeInWhenVisible } from "../../components/motion/FadeInWhenVisible";

const publishedProjects = projects.filter((project) => project.published);

export function Projects() {
  return (
    <SectionWrapper id={SECTION_IDS.PROJECTS} muted>
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured projects"
        description="Real products I've designed and built end to end, for businesses and institutions."
      />

      <div className="flex flex-col gap-12">
        {publishedProjects.map((project, index) => (
          <FadeInWhenVisible key={project.id}>
            <ProjectCard project={project} reverse={index % 2 === 1} />
          </FadeInWhenVisible>
        ))}
      </div>
    </SectionWrapper>
  );
}
