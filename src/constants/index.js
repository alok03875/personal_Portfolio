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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  Java,
  MySQL,
  ExpressJs,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Food_del,
  Real_Estate,
  Airbnb,
 
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Java",
    icon: Java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    icon: ExpressJs,
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
    name: "MySQL",
    icon: MySQL,
  },
  
];

const experiences = [

  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
  {
    title: "MERN Stack Developer Intern",
    company_name: "Webguard info solutions Kanpur",
    icon: meta,
    iconBg: "#E6DEDD",
    date: " Oct 2024 – Mar 2025",
    points: [
      "Assisted in building and maintaining web applications using the MERN stack under senior developer supervision.",
      "Developed front-end components in React.js to improve UI functionality and user experience.",
      "Worked on integrating RESTful APIs and displaying dynamic content based on user interactions.",
      "Integrated third-party libraries such as Axios to streamline API calls and form validation processes.",
      "Gained practical experience in writing clean, maintainable code and following industry-standard development.",
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
  name: "Food Delivery Website",
  description:
    "A full-stack MERN application that allows users to browse restaurants, place online orders, and track deliveries. It features role-based access for users and admins, offering a streamlined and responsive food ordering experience.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
     {
      name: "Node js",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
   
  ],
  image: Food_del,
  source_code_link: "https://food-delivery-full-stack-2i3d.onrender.com/",
},

  {
     name: "Real Estate Website",
  description:
    "A responsive real estate platform built with React.js. that Includes accordion sections for property details and smooth navigation using React Router. Designed with a focus on clean UI and user experience.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "green-text-gradient",
    },
    {
      name: "react-router",
      color: "pink-text-gradient",
    },
  ],
    image: Real_Estate,
    source_code_link: "https://realestatedemoweb.netlify.app/",
  },
  {
   name: "Airbnb Inspired WebApp",
  description:
    "A travel listing web app built with EJS, Node.js, and MongoDB. Users can register, log in, create property listings with images and location details, and leave reviews and ratings. Integrated Mapbox for interactive maps to explore listings and nearby attractions.",
  tags: [
    {
      name: "ejs",
      color: "orange-text-gradient",
    },
    {
      name: "node.js",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "blue-text-gradient",
    },
  ],
    image: Airbnb,
    source_code_link: "https://trip-trail-dx80.onrender.com/listings",
  },
];

export { services, technologies, experiences, testimonials, projects };
