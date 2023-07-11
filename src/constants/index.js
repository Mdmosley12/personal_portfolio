import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  express,
  mysql,
  psql,
  northcoders,
  developernews,
  eventsapp,
  youtubeclone,
  dipadvisor,
  threejs,
  nextjs,
} from "../assets/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Self-Taught Developer",
    icon: web,
  },
  {
    title: "Northcoders Graduate",
    icon: creator,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PSQL",
    icon: psql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Trainee Full Stack Developer",
    company_name: "Northcoders",
    icon: northcoders,
    iconBg: "#383E56",
    date: "November 2022 - March 2023",
    points: [
      "Attended 12 week intense coding bootcamp learning Javascript with full version control, test driven development(TDD) and pair programming.",
      "Built a Restful API using Node.js, Express.js and SQL, with heavy emphasis on testing with JEST.",
      "Built a single page application using React.js.",
      "Worked in a group of 4 to plan and build a full stack project with the intention of researching and using new tech.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Developer News",
    description:
      "A single-page, full-stack application. This was my very first project that I made at Northcoders. A good example of what I was able to create from what the course taught us.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "orange-text-gradient",
      },
    ],
    image: developernews,
    source_code_link: "https://github.com/Mdmosley12/Developer-News",
    hosted_site_link: "https://developernews-project.netlify.app/",
  },
  {
    name: "Events App",
    description:
      "This was my first time using NextJS. I used the built in API functionality but I would like to build full back-end functionality for it in the future as well as login features. I also started to experiment more with CSS here.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: eventsapp,
    source_code_link: "https://github.com/Mdmosley12/My-NextJS-Project",
    hosted_site_link: "https://next-js-events-project-sandy.vercel.app/",
  },
  {
    name: "YouTube Clone",
    description:
      "I created this app in order to brush up on my React skills. It was also the first time I experimented with the materialUI library. In the future I would like to add user login functionality. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeclone,
    source_code_link: "https://github.com/Mdmosley12/react-youtube-clone",
    hosted_site_link: "https://my-youtube-clone-a6h34h.netlify.app/",
  },
  {
    name: "DipAdvisor",
    description:
      "This was our group project from Northcoders. We built a mobile app using React Native. It was my first time working in a group, using an Agile methodology. It wasn't hosted but we did make a video presentation.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: dipadvisor,
    source_code_link: "https://github.com/Mdmosley12/DipAdvisor-FrontEnd",
    hosted_site_link: "https://northcoders.com/projects/mar-2023/dip-advisor",
  },
];

export { services, technologies, experiences, testimonials, projects };
