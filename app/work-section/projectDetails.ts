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
    id: 2,
    name: "New Wave",
    description:
      "🌊New Wave is an organization dedicated to environmental protection in Kazakhstan. We have been working in 18 major cities of the country for 4 years, 100+ project partners, Dedicated team with 2000+ volunteers",
    technologies: ["React", "Typescript", "Axios"],
    github: "https://github.com/mrbqble/new-wave-ts",
    demo: "no",
    image: require(".//../../public/projects/newwave.png"),
    available: true,
  },
  {
    id: 3,
    name: "Ippodrom",
    description:
      "Ippodrom is a website that lets users explore the horse-riding 'Ippodrom' business. Users can rent horse, create new accounts, and discover contact details. Currently, server is down due to maintanence and business reasons.",
    technologies: ["React", "Vite", "Typescript"],
    github: "https://github.com/ropdxm/ippodrom",
    demo: "https://ippodrom.netlify.app/",
    image: require(".//../../public/projects/ippodrom.png"),
    available: true,
  },
  {
    id: 4,
    name: "Balloons",
    description:
      "This is my first attempt in making e-commerce website with exquisite interface. The website is about promoting balloon tours business",
    technologies: ["React", "Sass", "CSS"],
    github: "https://github.com/ropdxm/baloons-animated-site",
    demo: "https://baloons-e-commerce.netlify.app//",
    image: require(".//../../public/projects/balloons.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
