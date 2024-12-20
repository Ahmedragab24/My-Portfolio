import { Menu, Step } from "@/interfaces";


export const MenuLink: Menu[] = [
  {
    Title: "Home",
    Url: "./",
  },
  {
    Title: "About me",
    Url: "./about",
  },
  {
    Title: "Contact Me",
    Url: "./#Contact",
  },
];

export const NavLink: Menu[] = [
  {
    Title: "Technical Skills",
    Url: "./#TechSkills",
  },
  {
    Title: "Soft Skills",
    Url: "./#SoftSkills",
  },
  {
    Title: "Projects",
    Url: "./#Projects",
  },
  {
    Title: "Educations",
    Url: "./#Education",
  },
  {
    Title: "Experience",
    Url: "./#Experience",
  },
];

export const aboutMe = {
  title: "Hello,",
  description:
    "My solid foundation in data structures, algorithms, object-oriented programming, and design patterns has allowed me to develop efficient, maintainable, and scalable code. I am proficient in JavaScript and TypeScript and have extensive experience working with React and Redux. I have also worked with Next.js, GraphQl, Sass, Tailwind CSS, and other front-end technologies.",
  name: "Eng-Ahmed Elmadany",
  position: "Front-end Developer",
  arabicTitle: "مرحباً,",
  arabicDescription:
    "لقد سمح لي الأساس المتين في هياكل البيانات والخوارزميات والبرمجة الموجهة للكائنات وأنماط التصميم بتطوير أكواد فعّالة وقابلة للصيانة وقابلة للتطوير. أنا بارع في JavaScript وTypeScript ولدي خبرة واسعة في العمل مع React وRedux. لقد عملت أيضًا مع Next.js وGraphQl وSass وTailwind CSS وتقنيات واجهة المستخدم الأخرى.",
  arabicName: "المهندس-أحمد المدني",
  arabicPsition: "مطور وجهات أمامية",
};

export const techSkills = [
  {
    title: "Programming languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Sql"],
  },
  {
    title: "Computer Science",
    skills: [
      "Algorithms",
      "Data structure",
      "RAM control",
      "Oop",
      "Design",
      "Patterns",
      "Solid Principles",
    ],
  },
  {
    title: "Computer Science",
    skills: [
      "Algorithms",
      "Data structure",
      "RAM control",
      "Oop",
      "Design",
      "Patterns",
      "Solid Principles",
    ],
  },
];

export const ExperienceData = [
  {
    title: "My own projects",
    description:
      "I have done many projects, more than 40 different projects, including e-commerce sites, real estate sites, task management sites, and employee management sites. I have built systems and have good experience in the world of web development.",
    titleLink: "My Profile on Github",
    arabicTitle: "مشاريعي الخاصة",
    arabicDescription:
      "لقد قمت بالعديد من المشاريع، أكثر من 40 مشروعًا مختلفًا، بما في ذلك مواقع التجارة الإلكترونية ومواقع العقارات ومواقع إدارة المهام ومواقع إدارة الموظفين، لقد قمت ببناء الأنظمة ولدي خبرة جيدة في عالم تطوير الويب.",
    arabicTitleLink: "ملفي الشخصي على Github",
    link: "https://github.com/Ahmedragab24",
    motion: -100,
    duration: 0.6,
  },
  {
    title: "Mostaql",
    description:
      "I have done many projects on the freelance platform, large and medium projects with clients in the Middle East, and all of them are happy to work with me",
    titleLink: "My profile on Mostaql",
    arabicTitle: "منصة مستقل",
    arabicDescription: "لقد قمت بالعديد من المشاريع على منصة العمل الحر، مشاريع كبيرة ومتوسطة مع عملاء في الشرق الأوسط، وجميعهم سعداء بالعمل معي",
    arabicTitleLink: "ملفي الشخصي على مستقل" ,
    link: "https://mostaql.com/u/Ahmed_Ragab8",
    motion: 100,
    duration: 0.8,
  },
  {
    title: "Orkend company",
    description:
      "I worked with Orkend Saudi Arabia as a remote front-end web developer for a year. It was an excellent period full of challenges and development.",
    titleLink: "Company Link",
    arabicTitle: "شركة اوركند" ,
    arabicDescription : "عملت مع شركة اوركند السعودية كمطور ويب عن بعد لمدة عام، وكانت فترة ممتازة مليئة بالتحديات والتطوير." ,
    arabicTitleLink: "لينك الشركة" ,
    link: "https://orkend.com/",
    motion: -100,
    duration: 1,
  },
];

export const steps: Step[] = [
  {
    title: "Bachelor of Social Work",
    history: "From 2020 to 2024",
    description:"I hold a bachelor's degree in social work from the Higher Institute of Social Work in Alexandria in 2024",
    arabicTitle: "بكالوريوس الخدمة الاجتماعية",
    arabicHistory: "من 2020 إلى 2024",
    arabicDescription: "حصلت على درجة البكالوريوس في الخدمة الاجتماعية من المعهد العالي للخدمة الاجتماعية بالاسكندرية سنة 2024",
    icon: "SchoolIcon",
    link: "/",
  },
  {
    title: "Computer Science CS50",
    history: "From 2020 to 2022",
    description:
      "Harvard University degree in computer science, CS50 curriculum in computer science integrated",
      arabicTitle: "علوم الحاسوب CS50",
      arabicHistory: "من 2020 إلى 2022",
      arabicDescription: "درجة في علوم الكمبيوتر من جامعة هارفارد، منهج CS50 في علوم الكمبيوتر المتكاملة",
    icon: "CodeIcon",
    link: "/",
  },
];