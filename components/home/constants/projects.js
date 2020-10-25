const projects = [
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
    name: "Drum Machine",
    projectUrl: "https://kelvinsanchez15.github.io/drum-machine/",
    repoUrl: "https://github.com/kelvinsanchez15/drum-machine",
    imgPath: "projectMedia/drum-machine.jpg",
    imgAlt: "Drum Machine preview",
    summary:
      "An interactive drumpad with realistic sounds built using React. The app allows you to play various sounds on the board, adjust the volume and turn the game on and off.",
    keyFeatures: [
      "Real sound bank",
      "Mouse & Keyboard support",
      "Volume/Power controls",
    ],
    technologies: ["React", "SCSS"],
  },
];

export default projects;
