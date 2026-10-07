import { ExternalLink } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ProjectGallery } from "./ProjectGallery";

export function ProjectCard({ project, reverse = false }) {
  const { title, type, role, contribution, features, tags, images, mobileImage, liveUrl } = project;

  return (
    <Card className="grid grid-cols-1 items-center gap-10 p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
      <div className={reverse ? "lg:order-2" : undefined}>
        <ProjectGallery images={images} mobileImage={mobileImage} url={liveUrl} />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">{type}</span>
          <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
          <span className="self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {role}
          </span>
        </div>

        <p className="text-base text-muted-foreground">{contribution}</p>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">Key features</span>
          <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>

        {liveUrl && (
          <Button
            as="a"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={ExternalLink}
            className="self-start"
          >
            Visit Site
            <span className="sr-only"> (opens in a new tab)</span>
          </Button>
        )}
      </div>
    </Card>
  );
}
