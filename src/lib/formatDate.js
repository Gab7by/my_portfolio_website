const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export function formatDateRange(startDate, endDate) {
  const start = formatter.format(new Date(`${startDate}-01`));
  const end = endDate === "Present" ? "Present" : formatter.format(new Date(`${endDate}-01`));
  return `${start} — ${end}`;
}
