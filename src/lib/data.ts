export const personalInfo = {
  name: "Ismael Barrera García",
  location: "Puerto Serrano, Cádiz, España",
  email: "terryismael2@gmail.com",
  github: "https://github.com/TerryIsmael",
  linkedin: "https://www.linkedin.com/in/ismael-barrera-garcía-778357298/",
  profilePicture: "profile_photo.jpg",
  heroDescription: `Ingeniero junior de software, con una sólida base en desarrollo de aplicaciones
 web y estructuras de datos. Durante mi formación, adquirí
 experiencia en lenguajes como Python, Java y Javascript, además de
 conocimientos en frameworks como React y Vue. Busco un entorno
 profesional donde pueda aplicar mis habilidades, aportar ideas y seguir
 aprendiendo. Me adapto rápidamente a nuevas tecnologías y disfruto
 trabajando en equipo para resolver problemas complejos. Estoy comprometido
 con el aprendizaje continuo y la mejora de mis habilidades técnicas.`,
};

export const workExperience = [
  {
    company: "BLUUMI APPS S.L.",
    location: "Sevilla, España",
    position: "Ingeniero de Software Junior",
    period: "Marzo 2025 - Presente",
    achievements: [
      "Migración de proyecto backend legacy a una arquitectura moderna con Django y Django Rest Framework.",
      "Automatización de procesos de despliegue utilizando Docker.",
      // "Implementación de nuevas funcionalidades en la aplicación web utilizando Angular.",
      "Creación de una aplicación web renovada con un diseño moderno y funcional usando React con Tailwind CSS.",
      "Participación en revisiones de código y mejora de la calidad del software.",
    ],
  },
];

export const education = [
  {
    institution: "Universidad de Sevilla",
    location: "Sevilla, España",
    degree: "Grado en Ingeniería Informática",
    period: "2020 - 2024",
    achievements: [
      "Nota media de 7,75.",
      "TFG puntuado con un 10.",
    ],
  },
];
export const skills = {
  "Lenguajes de programación": {
    icon: "💻",
    elements: [
      "Javascript", 
      "Typescript", 
      "Java", 
      "Python"
    ]
  },
  "Desarrollo Frontend": {
    icon: "🎨",
    elements: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vue.js",
      "React",
    ]
  },
  "Desarrollo Backend": {
    icon: "⚙️",
    elements: [
      "Express",
      "Django",
      "Spring Boot"
    ],
  },
  "Base de Datos y Almacenamiento": {
    icon: "🗄️",
    elements: [
     "SQL (MariaDB, PostgreSQL)", 
     "MongoDB"
    ]
  },
  "Cloud y DevOps": {
    icon: "☁️",
    elements: [
      "Docker",
      "Git",
      "Github",
    ],
  },
  "Herramientas y Servicios": {
    icon: "🧰",
    elements: [
    "Bun", 
    "Node", 
    "Vite", 
    ],
  },
};

export const projects = [
  {
    title: "APE",
    github: "https://github.com/TerryIsmael/ape",
    description: [
      "Aplicación web para la gestión y edición de archivos de forma conjunta.",
      "Sincronización en tiempo real con websockets para editores de archivos integrados, almacén colaborativo y chats.",
      "Sistema de permisos y roles para usuarios, tanto a nivel general como por archivo.",
    ],
    techStack: "MongoDB, JS, TS, Bun, Express, Vue",
  },
  {
    title: "Cohabify",
    github: "https://github.com/TerryIsmael/Cohabify",
    description: [
       "Aplicación de búsqueda de compañeros de piso.",
       "Documentación de la fase de vida completa de un proyecto.",
       "Trabajo en equipo y organización de grupos grandes (13 personas).",
       "Implementación de chat en tiempo real con websockets.",
       "Integración de API de catastro para contrastar información de propiedades.",
    ],
    techStack: "MariaDB, Java, Spring Boot, JS, Vue"
  },
  {
    title: "Aplicación de gestión de centros educativos",
    description: [
       "Desarrollo profesional de una aplicación de gestión de centros educativos.",
       "Datos masivos de más de 20 centros.",
       "Automatización de tareas de importación de datos desde fuente externa.",
       "Migración desde un sistema legacy, manteniendo la funcionalidad pero mejorando el rendimiento.",
       "Implementación de nuevas funcionalidades basadas en las necesidades de los usuarios.",
       "Soporte y gestión de incidencias.",
    ],
    techStack: "Python, Django, PostgreSQL, React, Tailwind CSS",
  },
];

