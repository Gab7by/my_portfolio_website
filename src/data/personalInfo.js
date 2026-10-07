export const personalInfo = {
  fullName: "Gabriel",
  displayName: "Gabriel",
  roleTitles: [
    "Medical Laboratory Scientist",
    "AI & Machine Learning Enthusiast",
    "AI in Healthcare Enthusiast",
    "Data Analyst",
    "Software Developer",
  ],
  identities: [
    { label: "Medical Laboratory Scientist", icon: "Microscope" },
    { label: "AI & Machine Learning Enthusiast", icon: "BrainCircuit" },
    { label: "AI in Healthcare Enthusiast", icon: "HeartPulse" },
  ],
  tagline: "Medical Laboratory Scientist exploring how AI can make healthcare better.",
  bio: {
    short:
      "I'm a Medical Laboratory Scientist with a growing passion for artificial intelligence and machine learning. I combine laboratory experience with data and software skills to explore how technology can make healthcare more accurate, efficient, and accessible.",
    long: [
      "I'm a Medical Laboratory Scientist by training. My work in the laboratory taught me how much patient care relies on accurate results, careful processes, and good data, and how much a small improvement in any of these can matter to the person behind the sample.",
      "Alongside the lab, I've built practical skills in data analysis and software development: cleaning and analysing data, building dashboards, and writing code in Python and JavaScript. Those skills led me to artificial intelligence and machine learning, and I've been learning steadily ever since.",
      "What excites me most is where these two worlds meet. I'm not trying to replace clinical expertise. I'm trying to understand how well-designed AI tools can support the people who deliver care.",
      "I'm a lifelong learner, and I try to bring curiosity, care, and a high standard of quality to everything I work on.",
    ],
  },
  location: "Kumasi, Ghana",
  email: "owusugabriel803@gmail.com",
  phone: "+233 24 782 1705",
  phoneHref: "tel:+233247821705",
  whatsapp: "+233 24 506 9530",
  whatsappUrl: `https://wa.me/233245069530?text=${encodeURIComponent(
    "Hi Gabriel, I found you through your portfolio and would like to get in touch."
  )}`,
  // Formspree form endpoint. This is public by design (not a secret) — delivery to
  // the inbox and server-side spam filtering are configured in the Formspree dashboard.
  contactFormEndpoint: "https://formspree.io/f/mwlvlqdj",
  availability: "Open to freelance projects & full-time roles",
  profileImage: "/Gabriel_profile_pic.jpeg",
  resumeUrl: "/resume.pdf",
};
