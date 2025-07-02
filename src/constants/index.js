export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'This Website',
    desc: 'This project is an immersive digital experience designed to leave a lasting impression. To accelerate my learning of advanced 3D web technologies, I built this portfolio based on a comprehensive YouTube tutorial, which provided a robust foundation for integrating React.js with the Three.js ecosystem.',
    subdesc:
      'The entire experience was architected using React.js for its powerful component-based UI, while Three.js (leveraging React Three Fiber and Drei) brings the stunning 3D world to life. The modern, minimalist aesthetic is achieved with the utility-first approach of Tailwind CSS. Frontend: React.js, Three.js, React Three Fiber, React Three Drei, Tailwind CSS. Build Tools: Vite. Services: EmailJS. Runtime Environment: Node.js ',
    href: 'https://github.com/Hargun2005/SOFTENG-281-Mind-Game-Guess-Colours-',
    texture: '/textures/project/web.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/threejs.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/vite.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/njs.svg',
      },
    ],
  },
  {
    title: 'SOFTENG 281 Operators Management System',
    desc: 'As a key university project, engineered a comprehensive command-line operator management system in Java from the ground up. Architected the application using core Object-Oriented Programming (OOP) principles, including a multi-level inheritance hierarchy with an abstract class to model various review types (Public, Private, Expert).',
    subdesc:
      'This design enabled polymorphic handling of review-specific actions such as endorsing, resolving, and uploading images. The system managed complex data relationships between operators, activities, and reviews, featuring robust input validation, custom ID generation logic, and advanced search functionalities. The entire project was built and managed using Maven.',
    href: 'https://github.com/Hargun2005/SOFTENG-281-Operator-Management-System',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.svg',
      },
    ],
  },
  {
    title: 'SOFTENG 281 Mind Game Guess Colours',
    desc: 'Engineered a command-line strategy game in Java where a player competes against an adaptive AI (HAL-9000). Architected the system using core Object-Oriented Programming (OOP) principles, including abstract classes and interfaces to create a flexible and extensible codebase. Implemented the Strategy design pattern to enable the AI to dynamically switch between different predictive algorithms (Random, AvoidLast, LeastUsed) at runtime based on game state and performance.',
    subdesc:
      'Utilized the Factory design pattern to instantiate AI opponents with varying difficulty levels (EASY, MEDIUM, HARD). The project was managed with Maven and featured a full command-line interface for gameplay.',
    href: 'https://github.com/Hargun2005/SOFTENG-281-Mind-Game-Guess-Colours-',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.svg',
      },
    ],
  },
  {
    title: 'SOFTENG-281-Find The Shortest Route',
    desc: 'Engineered a command-line routing application in Java to calculate the optimal path between countries on a complex world map, parsing network data from CSV files. Designed and implemented a graph data structure using a HashMap-based adjacency list to model the map. ',
    subdesc:
      'Employed a Breadth-First Search (BFS) algorithm to efficiently find the shortest path in terms of country-to-country hops. The application also calculated and reported complex route metrics, including total fuel consumption and a breakdown of fuel usage by continent.',
    href: 'https://github.com/Hargun2005/SOFTENG-281-Shortest-Route',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '13202F',
      background: ', linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.svg',
      },
    ],
  },
  {
    title: 'Omnifood- Udemy Course Project',
    desc: 'Engineered and launched "Omnifood," a fully responsive and visually compelling marketing website for a fictional food delivery service. This project served as a comprehensive, hands-on application of the entire front-end development lifecycle, from conceptualization to deployment. The primary goal was to build a pixel-perfect, portfolio-ready site that demonstrates a mastery of modern HTML, CSS, and fundamental web design principles, ensuring an optimal user experience across all devices.',
    subdesc: '',
    href: 'https://github.com/Hargun2005/omnifood-project',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
    ],
  },
  {
    title: 'Chair Shop UI Practice Udemy Project',
    desc: 'Developed a responsive product page UI for a modern chair shop, specifically to master advanced CSS. Implemented a complex layout system combining Flexbox for component alignment (navigation, buttons) and CSS Grid for the main page structure and an asymmetrical product gallery. This project demonstrates a strong ability to build clean, mobile-first interfaces from a design concept.',
    subdesc: '',
    href: 'https://github.com/Hargun2005/chair-shop-ui',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
    ],
  },
  {
    title: 'Personal Website',
    desc: 'Developed a fully responsive, single-page personal portfolio using modern HTML5 and CSS3 to showcase my skills and projects. The site features a mobile-first layout built with Flexbox and CSS Grid, enhanced with smooth CSS transitions for a polished user experience. It was rigorously tested for cross-device compatibility and includes a functional email contact form..',
    subdesc: '',
    href: 'https://github.com/Hargun2005/portfolio_website',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
    ],
  },
  {
    title: 'ENGGEN131 C Boxed In',
    desc: 'Developed a complete, playable version of the NP-hard puzzle game Sokoban. Implemented the core game engine, including state management on a 2D grid, rule-based player movement with "push-only" mechanics, and multi-layered collision detection. The final application successfully processes user input, validates game rules, and detects win conditions for complex puzzle levels.',
    subdesc: '',
    href: 'https://github.com/Hargun2005/C_boxed_in_game',
    texture: '/textures/project/boxedin.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/c.svg',
      },
    ],
  },
  {
    title: 'Matlab Photo Filter',
    desc: 'Developed a suite of 7 custom image processing filters in MATLAB,  by implementing algorithms for pixel-level manipulation of image arrays. Key techniques involved combining blur and color inversion for edge detection and applying color quantization for palette reduction. The modular functions were successfully applied to process both static images and video streams frame-by-frame.',
    subdesc: '',
    href: 'https://github.com/Hargun2005/matlab_photo_filter',
    texture: '/textures/project/filters.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Matlab',
        path: '/assets/matlab.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [8, 1, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-20, 12, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'University Of Auckland',
    pos: 'Bachelors Of Engineering (Honours) ',
    duration: '2024 - 2027',
    title: 'Specialisation: Software Engineering',
    icon: '/assets/logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Udemy',
    pos: 'Web Development Course',
    duration: 'JAN 2025',
    title:
      'Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid',
    icon: '/assets/logo.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Mount Roskill Grammar School',
    pos: 'Student',
    duration: '2019 - 2023',
    title: 'Year 9 - Year 13',
    icon: '/assets/logo.png',
    animation: 'salute',
  },
];
