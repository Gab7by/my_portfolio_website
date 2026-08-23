import { Quote } from "lucide-react";
import { Avatar } from "./Avatar";

export function TestimonialCard({ testimonial }) {
  const { quote, authorName, authorRole, authorCompany, authorAvatar } = testimonial;

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-card border border-border bg-card p-8 text-center shadow-sm sm:p-12">
      <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
      <p className="text-lg font-medium text-foreground sm:text-xl">“{quote}”</p>
      <div className="flex flex-col items-center gap-3">
        <Avatar src={authorAvatar} alt={authorName} size={56} />
        <div>
          <p className="font-heading font-semibold">{authorName}</p>
          <p className="text-sm text-muted-foreground">
            {authorRole}
            {authorCompany ? ` · ${authorCompany}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
