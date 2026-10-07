import { aiExpertise } from "../../data/skills";
import { getIcon } from "../../lib/iconMap";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { StaggerItem } from "../../components/motion/StaggerContainer";

export function AiSpotlight() {
  const HeaderIcon = getIcon("BrainCircuit");

  return (
    <StaggerItem className="md:col-span-3">
      <Card className="flex flex-col gap-8 border-t-4 border-t-accent p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <HeaderIcon size={20} aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-2">
            <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Key Skill
            </span>
            <h3 className="font-heading text-xl font-semibold sm:text-2xl">{aiExpertise.title}</h3>
            <p className="max-w-3xl text-base text-muted-foreground">{aiExpertise.description}</p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aiExpertise.tools.map((tool) => {
            const Icon = getIcon(tool.icon);
            return (
              <li
                key={tool.name}
                className="flex flex-col gap-2 rounded-card border border-border bg-muted/50 p-4 transition-colors duration-300 hover:border-accent/30"
              >
                <Icon size={20} className="text-accent" aria-hidden="true" />
                <span className="font-medium">{tool.name}</span>
                <span className="text-xs text-muted-foreground">{tool.use}</span>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Applied to</span>
          <ul className="flex flex-wrap gap-2">
            {aiExpertise.appliedTo.map((area) => (
              <li key={area}>
                <Badge>{area}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </StaggerItem>
  );
}
