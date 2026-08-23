import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Card } from "./Card";
import { Badge } from "./Badge";

export function ProjectCard({ project }) {
  const { title, description, tags, image, liveUrl, githubUrl, category } = project;

  return (
    <Card hoverable className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={`Preview of ${title}`}
          loading="lazy"
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-on-primary backdrop-blur">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <FaGithub size={16} aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
