import { getIcon } from "../../lib/iconMap";
import { Card } from "../../components/ui/Card";
import { SkillBar } from "../../components/ui/SkillBar";
import { StaggerItem } from "../../components/motion/StaggerContainer";

export function SkillCategoryGroup({ category, categoryIcon, items }) {
  const CategoryIcon = getIcon(categoryIcon);

  return (
    <StaggerItem>
      <Card className="flex h-full flex-col gap-6 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
            <CategoryIcon size={20} aria-hidden="true" />
          </span>
          <h3 className="font-heading text-lg font-semibold">{category}</h3>
        </div>

        <div className="flex flex-col gap-5">
          {items.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </Card>
    </StaggerItem>
  );
}
