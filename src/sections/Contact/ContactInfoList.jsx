import { getIcon } from "../../lib/iconMap";
import { socials } from "../../data/socials";
import { SocialIconLink } from "../../components/ui/SocialIconLink";

export function ContactInfoList({ email, phone, location }) {
  const items = [
    { icon: "Mail", label: "Email", value: email, href: `mailto:${email}` },
    { icon: "Phone", label: "Phone", value: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { icon: "MapPin", label: "Location", value: location, href: null },
  ];

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
                <p className="font-medium">{item.value}</p>
              </div>
            </>
          );

          return (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
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
