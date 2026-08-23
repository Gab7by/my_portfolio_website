import { services } from "../../data/services";
import { SECTION_IDS } from "../../lib/constants";
import { getIcon } from "../../lib/iconMap";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { StaggerContainer, StaggerItem } from "../../components/motion/StaggerContainer";

export function Services() {
  return (
    <SectionWrapper id={SECTION_IDS.SERVICES} muted>
      <SectionHeading
        eyebrow="Services"
        title="How I can help"
        description="From first sketch to shipped product, here's where I add the most value."
      />

      <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
        {services.map((service) => {
          const Icon = getIcon(service.icon);
          return (
            <StaggerItem key={service.id}>
              <Card hoverable className="flex h-full flex-col gap-4 p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                {service.highlights?.length > 0 && (
                  <ul className="mt-auto flex flex-col gap-1.5 pt-2 text-sm text-muted-foreground">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
