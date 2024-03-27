export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "NIS-Kazakhstan",
    description:
      "Team's website (documentation, if you will) for NIS-Kazakhstan iGEM 2023 team, where we built a bacteria that can orchestrate a systematic plastic decomposition process",
    technologies: ["Python", "Flask", "Bootstrap"],
    github: "https://gitlab.igem.org/2023/nis-kazakhstan",
    demo: "https://2023.igem.wiki/nis-kazakhstan/",
    image: require(".//../../public/projects/niskz.png"),
    available: true,
  },
  {
    id: 1,
    name: "New Wave",
    description:
      "🌊New Wave is an organization dedicated to environmental protection in Kazakhstan. We have been working in 18 major cities of the country for 4 years, 100+ project partners, Dedicated team with 2000+ volunteers",
    technologies: ["React", "Typescript", "Axios"],
    github: "https://github.com/ropdxm/new-wave",
    demo: "https://new-wave-eco.netlify.app/",
    image: require(".//../../public/projects/newwave.png"),
    available: true,
  },
  {
    id: 2,
    name: "Mavericks",
    description:
      "Programmer at Mavericks FTC team. Finalist of FIRST Central Asia Championship",
    technologies: ["React", "Parallax", "CSS"],
    github: "https://github.com/ropdxm/baloons-animated-site",
    demo: "https://mavericks-ftc.netlify.app/",
    image: require(".//../../public/projects/mavericks.png"),
    available: true,
  },
  {
    id: 3,
    name: "Clutch",
    description:
      "A side-project website that helps students with their College Application and provides support with the help of AI Chat bot",
    technologies: ["React", "Firebase", "OpenAI API"],
    github: "https://github.com/ropdxm/clutchify",
    demo: "https://clutchify-theta.vercel.app/",
    image: require(".//../../public/projects/clutch.png"),
    available: true,
  },
  {
    id: 4,
    name: "Ippodrom",
    description:
      "Ippodrom is a website that lets users explore the horse-riding 'Ippodrom' business. Users can rent horse, create new accounts, and discover contact details. Currently, server is down due to maintanence and business reasons.",
    technologies: ["React", "Vite", "Typescript"],
    github: "https://github.com/ropdxm/ippodrom",
    demo: "https://ippodrom.netlify.app/",
    image: require(".//../../public/projects/ippodrom.png"),
    available: true,
  },
];