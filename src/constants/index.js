
import { t } from 'maath/dist/misc-7d870b3c.esm';
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,

  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  image,
  image3,
  image5,
  image1,
  image6,
} from '../assets'


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Artificial Intelligence",
    icon: creator,
  },
  {
    title: "Cyber Security",
    icon: creator,
  }
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
    name: "framer",
    icon: framer,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Social Internship-Summer Internship Program",
    company_name: "UPES",
    icon: image6,
    iconBg: "#383E56",
    date: "JUNE 2023 - AUGUST 2023",
    points: [
      "Designed tools to improve math skills and foster interest in Uttarakhand’s culture among grade 3 to 5 students.",
      "Tools created using Canva and MS Office and blender"
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "self-employed",
    icon: image,
    iconBg: "#383E56",
    date: "Jan 2024 - present",
    points: [
      "Developing and maintaining web applications for clients.",
      "Collaborating with different employes teams including designers, start-ups, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "NASSCOM - Smart Interns (Summer Internship Program)",
    company_name: "NASSCOM",
    icon: image3,
    iconBg: "#E6DEDD",
    date: "June 2025 - August 2025",
    points: [
      "Completed AI and cloud-focused training powered by Google Cloud.",
      "Gained hands-on experience in Generative AI, Gemini tools, prompt engineering, and cloud applications.",
      "Built foundational and advanced knowledge through structured project-based learning",
    ],
  }
];

const testimonials = [

];

const projects = [
  {
    name: "Cyber-Threat-Detection",
    description:
      "Cyber threat detection involves using advanced algorithms and data-driven techniques to identify, monitor, and respond to potential security threats in digital systems. By analyzing patterns in network traffic, user behavior, and known threat signatures, machine learning models and AI systems help organizations detect anomalies, prevent cyberattacks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },

    ],
    image: image1,
    source_code_link: "https://github.com/viv3k89/Cyber-Threat-Detection-Using-Python.git",
  },
  {
    name: "CarCatalog",
    description:
      "CarCatalog is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair By leveraging satellite imagery, IoT sensor data, and climate models, machine learning enhances precision agriculture, optimizing crop yields and environmental sustainability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "webdevelopment",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/viv3k89/Car-Info-ChatBot.git",
  },
  {
    name: "YIELD-prediction-using-machine-learning-techniques",
    description:
      "Yield prediction using machine learning involves applying data-driven algorithms to forecast agricultural output based on factors like weather conditions, soil health, crop type, and farming practicesBy leveraging satellite imagery .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "deeplearning",
        color: "green-text-gradient",
      },
    ],
    image: image5,
    source_code_link: "https://github.com/viv3k89/YIELD-prediction-using-machine-learning-techniques.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
