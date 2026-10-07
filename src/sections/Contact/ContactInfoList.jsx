import { personalInfo } from "../../data/personalInfo";
import { getIcon } from "../../lib/iconMap";
import { socials } from "../../data/socials";
import { SocialIconLink } from "../../components/ui/SocialIconLink";

const items = [
  { icon: "Mail", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: "Phone", label: "Call", value: personalInfo.phone, href: personalInfo.phoneHref },
  {
    icon: "Whatsapp",
    label: "WhatsApp",
    value: personalInfo.whatsapp,
    href: personalInfo.whatsappUrl,
    external: true,
    srHint: " (opens WhatsApp)",
  },
  { icon: "MapPin", label: "Location", value: personalInfo.location, href: null },
];

export function ContactInfoList() {
  return (
    <div className="flex flex-col gap-8">
      <ul className="flex flex-col gap-5">
        {items.map((item) => {
          const Icon = getIcon(item.icon);
          const content = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                <p className="font-medium">
                  {item.value}
                  {item.srHint && <span className="sr-only">{item.srHint}</span>}
                </p>
              </div>
            </>
          );

          return (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-4">{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div>
        <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">Follow me</p>
        <div className="flex gap-3">
          {socials.map((social) => (
            <SocialIconLink key={social.id} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
}
