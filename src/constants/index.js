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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ACYA,
    Govhack,
    KPMG,
    Monash,
    Car,
    ML,
    Transurban,
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
      name: "TypeScript",
      icon: typescript,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Career Officer",
      company_name: "ACYA",
      icon: ACYA,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Dec 2023",
      points: [
        "Hosted large scale networking event to provide opportunites for students to land internships",
        "Collaborated with 5 other career officers to deliver this project",
        "Saved over 5100 USD for inviting the speakers to provide networking insights",
      ],
    },
    {
      title: "Community engagement team lead",
      company_name: "GovHack",
      icon: Govhack,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Dec 2023",
      points: [
        "Managing the backend system for providing emails to send to over 3000 participants in GovHack",
        "Managing all social media platform for Victoria team",
      ],
    },
    {
      title: "Project Manager",
      company_name: "Monash",
      icon: Monash,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Dec 2023",
      points: [
        "Operated as the project manager for the agile team of a Machine learning web application in a full year project",
        "Developed a whole road map for each sub agile team of the 4 mile stones for the entire year project",
        "Monitoring and mataining each tasks within trello to keep teammember updated",
        "Developed a fbx loader to help to test the fbx files when inputting animations",
        "Developed signin page, card display page, for the frontend using react",
      ],
    },
    {
      title: "Technology Implementation Oracle Team (Vactioner)",
      company_name: "KPMG",
      icon: KPMG,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Feb 2024",
      points: [
        "Coordinating and oraganising End2End testing",
        "Delivered full End2End testing on time in Zephyr",
        "Using dashboard within Zephyr to maintain and orgainse over 100 test cases",
      ],
    },
    {
      title: "Core Tolling Software Engineering (IBL)",
      company_name: "Transurban",
      icon: Transurban,
      iconBg: "#E6DEDD",
      date: "Feb 2025 - Present",
      points: [
        "Developed a credit card validation service using SOA architecture, leveraging adapters, mediators, and database calls for validation.",
        "Built fault-handling services, ensuring system resilience and reliability",
        "Currently completing SOA Architecture Certification to enhance expertise in enterprise service-oriented solutions.",

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
      name: "Car 3D",
      description:
        "3D animated Car for practicing rendering and import GLTF model for the Machine learning web application.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react three fiber",
          color: "green-text-gradient",
        },
      ],
      image: Car,
      source_code_link: "https://github.com/houyepu/car_3d",
    },
    {
      name: "Machine learning web application",
      description:
        "Web application to automate the rigging process of the model and using animation retargeting to apply animation to the model.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: ML,
      source_code_link: "https://github.com/Monash-FIT3170/Team7_AI_Modelling",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  