import {
    backend,
    webdev,
    frontend,
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
    threejs,
    techx,
    gitlab,
    pmix,
    plek,
    poddy,
    paom,
    projecttimesheet,
    cookieconsent,
    portfolioBg,
    passgen,
    toduit,
    // blackjack,
    // counterapp,
    // wargame,
    // boredbot,
    // dashboard,
    // memegen,
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
        id: "project",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: webdev,
    },
    {
        title: "Exploring Backend",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: frontend,
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
            "Developing internal web module using React, TypeScript and other technologies such as Ant Design Components",
            "Part of a vital aspect of our internal Time Tracking Project, designed to seamlessly monitor work progress, sprint activities, and project statuses for our esteemed Software Engineering Team.",
            "Integrating APIs and Backend services into Time Sheet Projects.",
            "Collaborating with teams including system analyst, quality assurance, product managers, and other developers to create high-quality products for clients.",
            "Participating in other projects responsible for Gateway management and Onboarding Open APIs integration using Postman, CA Portal, SQL and etc.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "He learnt new things pretty quick. I'm sure he could be a great programmer.",
        name: "( Mix ) Naiprakarn Nakornkhet",
        designation: "Software Engineer",
        company: "SCB Tech X",
        image: pmix,
    },
    {
        testimonial:
            "He has a strong passion for development and consistently pays close attention when learning.",
        name: "( Lek ) Apinun Uppanun",
        designation: "Software Engineer",
        company: "SCB Tech X",
        image: plek,
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
];

const projects = [
    {
        name: "Seth v2",
        description:
            `This portfolio website was built using Vite, React, Tailwind, Framer Motion, CSS animations, and Three.js for animations. I invested significant time researching and learning these technologies to ensure the site is maintainable and adaptable for future updates.`,
        tags: [
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "blue-text-gradient",
            },
            {
                name: "Three.js",
                color: "blue-text-gradient",
            },
            {
                name: "Vite",
                color: "pink-text-gradient",
            },
            {
                name: "Framer Motion",
                color: "blue-text-gradient",
            },
        ],
        image: portfolioBg,
        source_code_link: "https://github.com/Sin-cy/Portfolio",
    },
    {
        name: "Project Time Track",
        description:
        `During my internship, I worked on a project designed for tracking team routines, tasks, status updates, efforts, and sprint progress. It also featured an effort estimation tool for task prioritization. This project helped me deepen my knowledge of React, Ant Design, TypeScript, data structures, and project management with MongoDB and Express.`,
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
            {
                name: "express",
                color: "green-text-gradient",
            },
        ],
        image: projecttimesheet,
        // source_code_link: "https://github.com/",
    },
    {
        name: "Toduit",
        description:
            `A Full stack project - Simple Todo List app that a user can login for Authentication. Each user has their own account and their own Todo List. Using NodeJS + Express , Postgres Database with Prisma ORM to handle authentication and data + Docker container images to run the project on any platform.`,
        tags: [
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "NodeJS",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "blue-text-gradient",
            },
            {
                name: "Prisma",
                color: "green-text-gradient",
            },
            {
                name: "Docker",
                color: "blue-text-gradient",
            },
            {
                name: "Postgres",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: toduit,
        source_code_link:
            "https://github.com/Sin-cy/todoist-fs",
    },
    {
        name: "Cookie Consent",
        description:
        `This project mainly focuses on CSS, however with further researching, I implemented a javascript code 
        to create background animation using logic and box sizes to create on mouse move highlight background animations.`,
        tags: [
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: cookieconsent,
        source_code_link:
        "https://github.com/Sin-cy/cookie-consent.git",
    },
    {
        name: "Password Generator",
        description:
            ``,
        tags: [
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: passgen,
        source_code_link:
            "https://github.com/Sin-cy/password-gen.git",
    },
    // {
    //     name: "War Game",
    //     description:
    //         "The First project where I started using other third parties API's and implemented it into a card game",
    //     tags: [
    //         {
    //             name: "JavaScript",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "HTML",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "CSS",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: wargame,
    //     source_code_link:
    //         "https://github.com/Sin-cy/js-projects/tree/main/APIs/AsyncJS/src",
    // },
    // {
    //     name: "Bored Bot Idea Generator",
    //     description:
    //         "Another Project that implements an API into the code to create and generate random ideas for the user by providing a button. When clicks, generate random ideas :)",
    //     tags: [
    //         {
    //             name: "javascript",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: boredbot,
    //     source_code_link:
    //         "https://github.com/Sin-cy/js-projects/tree/main/APIs/Intro/src",
    // },
    // {
    //     name: "Blog Space",
    //     description:
    //         "Another one of my JavaScipt projects that utilizes the use of API to create a Place where people can come in and post blogs about anything. Posted blogs will be saved daily.",
    //     tags: [
    //         {
    //             name: "javascript",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "REST",
    //             color: "green-text-gradient",
    //         },
    //     ],
    //     image: blogspace,
    //     source_code_link:
    //         "https://github.com/Sin-cy/js-projects/tree/main/APIs/REST/src",
    // },
    // {
    //     name: "Dashboard",
    //     description:
    //         "This Project uses the OpenWeather API, CrytoCurrency API and also a background wallpaper API to create a Dashboard that has a live current time update + current weather according to your location.",
    //     tags: [
    //         {
    //             name: "javascript",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: dashboard,
    //     source_code_link:
    //         "https://github.com/Sin-cy/js-projects/tree/main/PromiseReject",
    // },
    // {
    //     name: "Meme Generator",
    //     description:
    //         "Generates cat memes by taking in user input selection of choice and filtering through the data.",
    //     tags: [
    //         {
    //             name: "javascript",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "blue-text-gradient",
    //         },
    //     ],
    //     image: memegen,
    //     source_code_link: "https://github.com/Sin-cy/Meme-Generator",
    // },
];

export { services, technologies, experiences, testimonials, projects };
