import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  techx,
  gitlab,
  pmix,
  plek,
  poddy,
  paom,
  projecttimesheet,
    blackjack,
    counterapp,
    wargame,
    boredbot,
    blogspace,
    dashboard, 

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "gitlab",
    icon: gitlab,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "SCB Tech X",
    icon: techx,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Developing internal web module using React.js, TypeScript and other technologies such as Ant Design Components",
      "Part of a vital aspect of our internal Time Tracking Project, designed to seamlessly monitor work progress, sprint activities, and project statuses for our esteemed Software Engineering Team.",
      "Integrating APIs and Backend services into Time Sheet Projects.",
      "Collaborating with teams including system analyst, quality assurance, product managers, and other developers to create high-quality products for clients.",
      "Participating in other projects responsible for Gateway management and Onboarding Open APIs integration using Postman, CA Portal, SQL and etc.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "He learnt new things pretty quick. I'm sure he could be a great programmer.",
    name: "( Mix ) Naiprakarn Nakornkhet",
    designation: "Software Engineer",
    company: "SCB Tech X",
    image: pmix ,
  },
  {
    testimonial:
      "He has a strong passion for development and consistently pays close attention when learning.",
    name: "( Lek ) Apinun Uppanun",
    designation: "Software Engineer",
    company: "SCB Tech X",
    image: plek ,
  },
  {
    testimonial:
      "He fits right in quickly and able to deliver any tasks assigned to. I will surely recommend him to any teams.",
    name: "( Oddy ) Nawapoom Lohajarernvanich",
    designation: "Software Engineer Manager",
    company: "SCB Tech X",
    image: poddy,
  },
  {
    testimonial:
      "He is a good representative who proves that everyone can learn and develop oneself to be a programmer no matter what field you graduated.",
    name: "( Aom ) Apinya Mokkaraphan",
    designation: "Senior Talent Acquisitions Officer",
    company: "SCB Tech X",
    image: paom,
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
    {
        name: "Black Jack",
        description:
        "A Black Jack game, first project I ever created during my practice for Javascript",
        tags: [
            {
                name : "JavaScript",
                color : "green-text-gradient"
            },
            {
                name : "HTML",
                color : "blue-text-gradient"
            },
            {
                name : "CSS",
                color : "pink-text-gradient"
            },
        ],
        image : blackjack,
        source_code_link: "https://github.com/Sin-cy/js-projects/tree/main/black-jack",
    },
    {
        name: "Counter App",
        description:
        "The Counter App was a project I made during my time of practicing Javascript skills with for loops and DOM Manipulations",
        tags: [
            {
                name : "JavaScript",
                color : "green-text-gradient"
            },
            {
                name : "HTML",
                color : "blue-text-gradient"
            },
            {
                name : "CSS",
                color : "pink-text-gradient"
            },
        ],
        image: counterapp,
        source_code_link: "https://github.com/Sin-cy/js-projects/tree/main/counter-app",
    },
    {
        name: 'War Game',
        description: 
        "The First project where I started using other third parties API's and implemented it into a card game",
        tags: [
            {
                name : "JavaScript",
                color : "green-text-gradient"
            },
            {
                name : "HTML",
                color : "blue-text-gradient"
            },
            {
                name : "CSS",
                color : "pink-text-gradient"
            },
        ],
        image : wargame,
        source_code_link: "https://github.com/Sin-cy/js-projects/tree/main/APIs/AsyncJS/src",
    },
    {
        name: "Bored Bot Idea Generator",
        description:
        "Another Project that implements an API into the code to create and generate random ideas for the user by providing a button. When clicks, generate random ideas :)",
        tags: [
            {
                name : "javascript",
                color : "green-text-gradient"
            },
            {
                name : "html",
                color : "blue-text-gradient"
            },
            {
                name : "css",
                color : "pink-text-gradient"
            },
        ],
        image: boredbot,
        source_code_link: "https://github.com/Sin-cy/js-projects/tree/main/APIs/Intro/src",
    },
    {
        name: "Blog Space",
        description: 
        "Another one of my JavaScipt projects that utilizes the use of API to create a Place where people can come in and post blogs about anything. Posted blogs will be saved daily.",
        tags: [
            {
                name : "javascript",
                color : "green-text-gradient"
            },
            {
                name : "html",
                color : "blue-text-gradient"
            },
            {
                name : "css",
                color : "pink-text-gradient"
            },
            {
                name : "REST",
                color : "green-text-gradient",
            },
        ],
        image: blogspace,
        source_code_link: "https://github.com/Sin-cy/js-projects/tree/main/APIs/REST/src",
    },
    {
        name: "Dashboard",
        description :
        "This Project uses the OpenWeather API, CrytoCurrency API and also a background wallpaper API to create a Dashboard that has a live current time update + current weather according to your location.",
        tags: [
            {
                name : "javascript",
                color : "green-text-gradient"
            },
            {
                name : "html",
                color : "blue-text-gradient"
            },
            {
                name : "css",
                color : "pink-text-gradient"
            },
        ],
        image: dashboard,
        source_code_link : "https://github.com/Sin-cy/js-projects/tree/main/PromiseReject",
    },
    {
        name: "Project Time Track",
        description:
        "This project was developed to offer a streamlined view and efficient routine tracking of team members, project tasks, status updates, efforts, and sprint progress. Additionally, it includes a feature for rapid estimation of effort points required for both Developers and Quality Assurance teams to focus on specific tasks or projects.",

        tags: [
            {
                name: "react",
                color: "blue-text-gradient",

            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "ant-design",
                color: "pink-text-gradient",
            },
        ],
        image: projecttimesheet,
        // source_code_link: "https://github.com/",
    },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
