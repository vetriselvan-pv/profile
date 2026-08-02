import {
  BioData,
  Project,
  BlogArticle,
  Achievement,
  OpenSourceRepo,
  SkillCategory,
  Experience,
  Recommendation,
} from "../types";

export const bioData: BioData = {
  idBadge: "Senior Full Stack Engineer",
  whoAmI: "Vetriselvan Panneerselvam",
  title: "Architecting",
  highlightedTitle: "Fintech Platforms.",
  bioText:
    "Senior Full Stack Engineer with 7+ years of experience building enterprise fintech platforms using Angular, Java Spring Boot, Node.js, and Nx Monorepos. Specialized in scalable frontend architecture, distributed systems, and secure API development.",
  location: "Chennai, India",
  availability: "OPEN_TO_COLLAB",
  yearsExp: "07+",
  commitsPerWk: "124",
  projectShips: "8+",
  imageUrl: "/profile_video.mp4",
};

export const projectsData: Project[] = [
  {
    id: "d-power",
    title: "D-POWER TESTING SERVICES",
    subtitle: "REACT & TYPESCRIPT",
    type: "large",
    tags: ["React", "Typescript", "Public"],
    image: "./dpowertestingservice.png",
    description:
      "D-POWER TESTING SERVICES PTE LTD is a company that provides testing services to the energy industry.",
    githubUrl: "https://github.com/vetriselvan-pv/d-power-service",
    demoUrl: "https://dpowertestingservices.com.sg/",
    metrics: [{ label: "VISIBILITY", value: "Public" }],
  },
  {
    id: "resume-builder",
    title: "Carrer Builder",
    subtitle: "AI Based Resume/coverletter Builder",
    tags: ["React", "Typescript", "Tailwind", "Vercel", "GenAI"],
    image: "./resume_builder.png",
    description: "AI Based Resume/coverletter Builder",
    githubUrl: "https://github.com/vetriselvan-pv/career-application-ai-studio",
    demoUrl: "https://github.com/vetriselvan-pv/career-application-ai-studio",
    metrics: [{ label: "VISIBILITY", value: "Public" }],
    type: "large",
  },
  {
    id: "workspace-generator",
    title: "Workspace Generator",
    subtitle: "PROJECT SCAFFOLDING",
    type: "tall",
    tags: ["React", "TypeScript", "Node.js", "Public"],
    image: "./workspace-generator-logo.svg",
    description:
      "A workspace generator application I built to scaffold project structures quickly and standardize development setup across new applications.",
    githubUrl:
      "https://github.com/vetriselvan-pv/workspace-generator/blob/main/PORTFOLIO_CASE_STUDY.md",
    demoUrl: "https://github.com/vetriselvan-pv/workspace-generator",
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management",
    subtitle: "COFFEE VENDOR LOGISTICS",
    type: "wide",
    tags: ["Ionic", "Angular", "Capacitor", "Private"],
    image: "./warehouse-app-placeholder.svg",
    description:
      "A mobile application built to efficiently manage warehouse operations, inventory, and logistics for a coffee vendor shop.",
    metrics: [{ label: "VISIBILITY", value: "Private" }],
  },
];

export const experienceData: Experience[] = [
  {
    company: "Intellect Design Arena",
    location: "Chennai",
    period: "03/2025 - Current",
    role: "Senior Project Lead",
    projects: [
      {
        name: "FPX AI — Custom MCP Server & Editor Plugin",
        role: "Senior Fullstack Developer / Project Lead",
        highlights: [
          "Engineered a custom Model Context Protocol (MCP) server using Node.js to integrate the corporate FPX design system natively with modern AI development environments, including Claude, Cursor, and Antigravity.",
          "Programmed the server to interpret developer natural language prompts and automatically output fully functional, complex Angular frontend components that strictly adhere to standard FPX architectural rules, layouts, and style guidelines.",
          "Eliminated repetitive layout assembly tasks and boilerplate setup for product engineers, reducing early-stage UI prototyping timelines from hours to seconds while guaranteeing 100% compliance with core enterprise engineering patterns.",
        ],
      },
      {
        name: "FPX Library (Fintech UI Framework)",
        role: "Senior Fullstack Developer / Project Lead",
        highlights: [
          "Architected a configuration-driven full stack framework using Angular and Node.js, enabling dynamic UI rendering and reducing feature development time by 40% across multiple product teams.",
          "Designed and implemented reusable NPM component libraries and backend-driven configuration systems, improving UI consistency and minimizing duplicate code by 50%.",
          "Led a team of 6 engineers to deliver scalable frontend and API-integrated modules aligned with enterprise fintech requirements.",
          "Established coding standards, linting, and CI/CD practices, improving code quality and reducing production defects.",
        ],
      },
      {
        name: "Pulse – BaaS Platform (API Monetization & Billing)",
        role: "Senior Fullstack Developer / Technical Lead",
        highlights: [
          "Developed and scaled a BaaS platform supporting API monetization and billing workflows across multiple enterprise banking products.",
          "Built and integrated RESTful APIs using Node.js, enabling seamless communication between frontend applications and backend services.",
          "Engineered scalable workflows for API subscription, monetization, usage tracking, and automated billing systems.",
          "Implemented secure document specification upload and asset management features for API lifecycle workflows.",
        ],
      },
      {
        name: "API Exchange – Consumer API Portal",
        role: "Senior Fullstack Developer / Technical Lead",
        highlights: [
          "Engineered a full stack API marketplace platform supporting API discovery, access control, and subscription workflows.",
          "Designed role-based access systems and backend-driven authorization logic, improving application security and scalability.",
          "Integrated real-time data synchronization between Angular frontend and Node.js backend services.",
        ],
      },
    ],
  },
  {
    company: "Intellect Design Arena",
    location: "Chennai",
    period: "10/2023 - 03/2025",
    role: "Team Lead",
    projects: [
      {
        name: "iTurmeric Studio (Low Code Platform)",
        role: "Full Stack Engineer / Team Lead",
        highlights: [
          "Mentored a 3-member frontend engineering team delivering a low-code Angular enterprise platform.",
          "Designed scalable Angular component libraries adopted across 5+ teams, reducing development effort by 50%.",
          "Conducted code reviews and enforced Angular architecture standards, folder structures, and quality gates.",
          "Developed secure internal APIs using Node.js and Express.js with Bcrypt encryption for automation workflows.",
        ],
      },
    ],
  },
  {
    company: "Intellect Design Arena",
    location: "Chennai",
    period: "10/2022 - 09/2023",
    role: "Consultant",
    projects: [
      {
        name: "Retail Banking Hybrid Mobile & Back-Office Applications",
        role: "Consultant",
        highlights: [
          "Developed a retail banking hybrid mobile application using Angular 14, Ionic, and Apache Cordova.",
          "Implemented credit card services and complex workflow-driven banking features.",
          "Integrated native Cordova plugins and optimized UI interactions using GSAP animations.",
          "Contributed to enterprise back-office banking applications including Service Request Management and Role Maintenance modules.",
        ],
      },
    ],
  },
  {
    company: "Intellect Design Arena",
    location: "Jordan",
    period: "09/2021 - 10/2022",
    role: "Associate Consultant",
    projects: [
      {
        name: "Arab Bank Teller Application (On-site - Jordan)",
        role: "Frontend Developer",
        highlights: [
          "Built Angular 8 teller applications featuring reusable UI components for bill payment workflows.",
          "Collaborated directly with on-site clients and domain experts to gather requirements and deliver enhancements.",
        ],
      },
      {
        name: "Sberbank Retail Mobile & Web Application",
        role: "Hybrid Mobile App Developer",
        highlights: [
          "Independently developed Service Request, Flex Pay, Onboarding, and Greenification modules using Angular and Java backend systems.",
        ],
      },
    ],
  },
  {
    company: "Newage Software and Solutions",
    location: "Chennai",
    period: "11/2019 - 09/2021",
    role: "Frontend Developer",
    projects: [
      {
        name: "ERP Logistics & CRM Modules",
        role: "Frontend Developer",
        highlights: [
          "Developed core ERP logistics modules using Angular 9 with Nx workspace.",
          "Implemented NGXS state management for booking workflows.",
          "Delivered a CRM module for a hybrid Ionic application.",
        ],
      },
    ],
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: "medium",
    date: "2025 - Present",
    title: "Published on Medium",
    summary:
      "Deep dives into Full Stack Development, performance optimization, scalable frontend architecture, and deployment best practices.",
    tags: ["#MEAN", "#MERN", "#JAVA", "#CI/CD"],
    readTime: "Various",
    content: `
### Medium Publication
I regularly author in-depth technical articles focusing on **Full Stack Development, performance optimization, and scalable frontend architectures**.

Read my full collection of engineering essays directly on my Medium profile: [medium.com/@vetriselvan_11](https://medium.com/@vetriselvan_11)
    `,
  },
  {
    id: "devto",
    date: "2025 - Present",
    title: "Writing on Dev.to",
    summary:
      "Sharing technical insights, tutorials, and best practices with the broader developer community on Dev.to.",
    tags: ["#MEAN", "#MERN", "#JAVA", "#CI/CD"],
    readTime: "Various",
    content: `
### Dev.to Articles
I share tutorials, deployment best practices, and code snippets with the global developer community. My goal is to make complex architectural concepts approachable.

Check out my latest technical posts on Dev.to: [dev.to/vetriselvan_11](https://dev.to/vetriselvan_11)
    `,
  },
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    period: "2023",
    title: "Sergey Bubka Award",
    description: "Best Product Engineer at Intellect Design Arena.",
    tags: ["Product Engineering"],
    isActive: true,
  },
  {
    id: "ach-2",
    period: "2022",
    title: "Spotlight Award",
    description: "Recognized for outstanding contributions and performance.",
    verifiedId: "",
  },
  {
    id: "ach-3",
    period: "2021",
    title: "Ace Developer Award",
    description: "Awarded for exceptional developer skills and impact.",
  },
  {
    id: "ach-4",
    period: "2020",
    title: "Rockstar Rookie Award",
    description: "Awarded for outstanding performance as a newcomer.",
  },
];

export const openSourceData: OpenSourceRepo[] = [
  {
    id: "os-1",
    name: "AnalogJS Ecosystem",
    stats: "2026 - Present",
    description:
      "Contributing Angular architecture patterns and developer tooling enhancements for modern frontend applications.",
    icon: "data_object",
    type: "commit",
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "FRONTEND",
    file: "frontend.json",
    icon: "web",
    type: "tags",
    items: [
      { name: "HTML & CSS" },
      { name: "SCSS" },
      { name: "Angular" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "RxJS" },
      { name: "NGXS" },
      { name: "Angular Material" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "BACKEND",
    file: "backend.sys",
    icon: "dns",
    type: "tags",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "VERSION_CONTROL_&_CLOUD_&_DEVOPS",
    file: "deploy.yml",
    icon: "terminal",
    type: "tags",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Nginx" },
    ],
  },
  {
    title: "ARCHITECTURE",
    file: "architecture.env",
    icon: "construction",
    type: "tags",
    items: [
      { name: "Nx Monorepo" },
      { name: "Micro Frontends" },
      { name: "Module Federation" },
      { name: "Native Federation" },
      { name: "Angular Architecture" },
      { name: "Microservices" },
    ],
  },
];

export const recommendationsData: Recommendation[] = [
  {
    id: "rec-1",
    name: "Manash Chakraborty",
    title: "Engineering Manager @ Intellect Design Arena",
    date: "2024",
    text: "Vetriselvan is one of the best UI developer and designer that I have come across. His ability to grasp architectural design and implementation of the same is impeccable. He understands client needs and comes up with multiple approaches for the same problem statement and enabled the best suitable one.\n\nHis skillset and team management ability has taken him to his current role earning him praises and accolades from every stakeholder! I wish him all the success in career and life.",
    image: "./person.svg",
  },
  {
    id: "rec-2",
    name: "Abdul Hameed",
    title: "Senior Project Lead @ Intellect Design Arena",
    date: "2024",
    text: "I have known Vetri Selvan for the past three years, and he is an exceptionally talented and technically strong professional. He has deep core knowledge of Angular and product development, and his understanding goes well beyond implementation—he truly thinks from a scalable, long-term product perspective.\n\nVetri has been instrumental in designing and developing custom libraries, which significantly improved reusability and consistency across projects. Along with his technical expertise, he has effectively led development teams, managed internal teams, and successfully handled client-facing maintenance and delivery responsibilities.\n\nWhat really sets him apart is his ability to combine hands-on technical depth with strong leadership. He guides teams, solves complex problems, and ensures high-quality delivery while maintaining clarity in communication with stakeholders.\n\nI highly recommend Vetri Selvan to any organization looking for a strong Angular expert, technical leader, and product-focused engineer. He would be a valuable asset to any team.",
    image: "./person.svg",
  },
  {
    id: "rec-3",
    name: "Sivashankar S",
    title: "Full stack Software Developer @ Intellect Design Arena Ltd",
    date: "2024",
    text: "First of all I am greatful for having such a wonderful Leader. He is such a passionate, hardworking and at the same time show calm and kind personality. He inspired the co-worker in a lot of way especially his character the outstanding one.\n\nHe is such a promising dedicated hardworker and passionate person who wants to achieve his dreams and helps other to do so. His technical expertise matches the top 1% of the software developers who are actually solving real wold complex problems that are helping million of lifes. I am grateful and I'm solemnly happy to have such a wonderful brother in my life. He is deeply dedicated to achieving excellence and is equally committed to helping his colleagues reach their own goals. His promising talent and drive make him an asset to any organization, and I highly recommend him as both a visionary leader and a dedicated teammate",
    image: "./person.svg",
  },
  {
    id: "rec-4",
    name: "G Anirudh",
    title: "Software Engineer @ JP Morgan",
    date: "2024",
    text: "I have worked with Vetriselvan for only a few months, but his understanding and depth in designing web applications are unbelievable. The most impressive part is that he graduated with a non-technical degree, yet his passion for technology has made him a true veteran :)\n\nKeep learning, keep growing, keep inspiring, and keep shining—always the way you do!",
    image: "./person.svg",
  },
  {
    id: "rec-5",
    name: "ADAIKKALAPITCHAI A",
    title: "Consultant @ Intellect Design Arena",
    date: "2024",
    text: "I had the pleasure of working with Vetriselvan during our senior project, where he served as the Project Lead and played a key role in driving the team's success. He demonstrated strong technical expertise in Angular, taking ownership of frontend architecture, component design, and API integration while ensuring clean and scalable code. Beyond their technical skills, vetriselvan showed excellent leadership by coordinating tasks, mentoring team members, and maintaining clear communication throughout the project. His ability to balance hands-on development with effective team management made a significant impact on our project's quality and timely completion. I highly recommend vetriselvan for opportunities involving Angular development and technical leadership.",
    image: "./person.svg",
  },
  {
    id: "rec-6",
    name: "Mohammad Ibrahim Ayoob",
    title: "Product Engineer @ Intellect Design Arena Ltd",
    date: "2024",
    text: "I’ve had the privilege of working with Vetriselvan Bro, and he is an excellent technical lead with strong expertise in Angular development. He is highly innovative and consistently focuses on building clean, scalable, and efficient solutions.\n\nWhat truly sets him apart is his continuous learning mindset. He is always exploring new technologies and advanced concepts, and actively tries to implement them in real projects to improve performance, maintainability, and overall quality.\n\nAs a leader, he is supportive, approachable, and encourages best practices across the team. His technical guidance and forward-thinking approach make him a great asset to any organization.",
    image: "./person.svg",
  },
  {
    id: "rec-7",
    name: "Mohamed Wasim Akram A",
    title: "Software Engineer @ Intellect Design Arena",
    date: "2024",
    text: "I worked closely with him on an internal low-code studio used to build APIs and UI through drag-and-drop, which multiple projects across the company depend on.\n\nHe owns this product end-to-end and understands what actually happens behind the scenes when components are configured—something only he can reliably debug and fix.\n\nAs an Angular developer, he combines deep framework knowledge with strong product ownership, making him critical to the stability of several dependent teams.",
    image: "./person.svg",
  },
];
