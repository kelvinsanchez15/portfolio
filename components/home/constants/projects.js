const projects = [
  {
    name: "Issueless",
    projectUrl: "https://issueless.vercel.app",
    repoUrl: "https://github.com/kelvinsanchez15/issueless",
    imgPath: "projectMedia/issueless.jpg",
    imgAlt: "Issueless preview",
    summary: "JAMStack Issue Tracker project inspired on GitHub issues.",
    keyFeatures: [
      "Hybrid static & server rendering",
      "OAuth sign-in services",
      "Markdown support",
      "Custom MUI theme",
    ],
    technologies: ["React", "NextJS", "PostgreSQL", "Prisma", "Material-UI"],
  },
  {
    name: "Choropleth Map",
    projectUrl: "https://kelvinsanchez15.github.io/choropleth-map/",
    repoUrl: "https://github.com/kelvinsanchez15/choropleth-map",
    imgPath: "projectMedia/choropleth-map.jpg",
    imgAlt: "Choropleth map preview",
    summary:
      "An United States Educational Attainment data visualization map built with D3.",
    keyFeatures: [
      "Data fetching",
      "Color legend",
      "Dynamic tooltip",
      "Dark theme",
    ],
    technologies: ["Vanilla JS", "D3"],
  },
  {
    name: "A-Note",
    projectUrl: "https://a-note.vercel.app",
    repoUrl: "https://github.com/kelvinsanchez15/a-note",
    imgPath: "projectMedia/a-note.jpg",
    imgAlt: "A-note site mocked device preview",
    summary:
      "A simple, fast and intuitive note-taking app built with NextJS JAMStack solution.",
    keyFeatures: [
      "Serveless API routes",
      "Optimistic UI",
      "JWT authentication",
      "Profile customization",
    ],
    technologies: ["React", "NextJS", "MongoDB", "Material-UI", "SWR"],
  },
  {
    name: "Anonymous Message Board",
    projectUrl: "https://anonymous-message-board-kel.glitch.me",
    repoUrl: "https://github.com/kelvinsanchez15/anonymous-message-board",
    imgPath: "projectMedia/anonymous-message-board.jpg",
    imgAlt: "Anonymous message board preview",
    summary:
      "A web app where users can create boards, post comments and remove them.",
    keyFeatures: [
      "RESTful API",
      "Server side rendering",
      "Dark theme",
      "Flash alerts",
      "Unit tests",
    ],
    technologies: ["Express", "Node", "MongoDB", "PUG"],
  },
];

export default projects;
