export function Avatar({ src, alt, size = 48, className = "", imgClassName = "" }) {
  const initials = alt
    ? alt
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";

  return (
    <div
      className={["overflow-hidden rounded-full bg-muted", className].join(" ")}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          loading="lazy"
          className={["h-full w-full object-cover", imgClassName].join(" ")}
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-muted-foreground">
          {initials}
        </span>
      )}
    </div>
  );
}
