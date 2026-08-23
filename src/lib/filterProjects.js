export function filterProjectsByCategory(projects, category) {
  if (!category || category === "All") return projects;
  return projects.filter((project) => project.category === category);
}
