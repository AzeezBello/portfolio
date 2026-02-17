import {
  wordpress,
  python,
  django,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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

export const services = [
  { title: "React JS", icon: reactjs },
  { title: "WordPress", icon: wordpress },
  { title: "Python", icon: python },
  { title: "Django", icon: django },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Tech Lead",
    company_name: "Viral Ad Media.",
    icon: eduskill,
    iconBg: "#161329",
    date: "2020 - Till Date",
    points: [
      "- Led brand launches, website redesign, and digital marketing campaigns for a variety of clients, from local businesses to national non-profits.",
      "- Steered company executives towards making informed decisions during the development of new App features by conducting user interviews.",
      "- Assisted the company in hiring new candidates for design & engineering positions, conducting technical interviews and evaluating portfolios to ensure the selection of top talent.",
      "- Collaborated with cross-functional teams including designers, developers, and marketers to deliver high-quality products and services that meet client needs.",
    ],
  },
  {
    title: "Freelance Product Designer ",
    company_name: "Keble",
    icon: mathwork,
    iconBg: "#161329",
    date: "2021",
    points: [
      "- Responsible for creating full UI/UX redesign of myyinvest transformation into Keble, creating product designs, illustrations for internal pages, conducting UX research.",
      "- Conducted a competitive analysis to get a better understanding of the pros and cons that the App had.",
      "- Created user personas and user journey maps to better understand the target audience and their needs.",
    ],
  },
  {
    title: "Freelance UI Designer",
    company_name: "Techmade Eazy.",
    icon: edunet,
    iconBg: "#161329",
    date: "2020 - 2021",
    points: [
      "- I collaborated with developer teams & managed a wide variety of cross-media projects involving branding, illustrations, UI Design for startups & organizations such as Zenith Prudential, Limedesks, Fresh ERP",
      "- Created a design system that reduces technical debt for both designers and engineers",
      "- Developed wireframes, prototypes, and high-fidelity designs for web and mobile applications using Figma and Adobe XD.",
    ],
  },
  {
    title: "Freelance UI Designer",
    company_name: "Mapps.",
    icon: edunet,
    iconBg: "#161329",
    date: "2020 - 2021",
    points: [
      "- Responsible for creating full UI design,  illustrations for internal pages, ans conducting UX research.",
      "- Created a design system that reduces technical debt for both designers and engineers",
      "- Developed wireframes, prototypes, and high-fidelity designs for web and mobile applications using Figma and Adobe XD.",
    ],
  },
  {
    title: "Django Developer / Design Lead",
    company_name: "ScholarX Inc.",
    icon: edunet,
    iconBg: "#161329",
    date: "2016 - 2019",
    points: [
      "- Supervised 7 lead a team of 5 junior software engineers during the development of a robust upgrade version of the company's software applications resulting in improved user experience and a 33% revenue increase within 10 months.",
      "- Enhance the application's features to effectively fix the bugs and optimize the overall performance, reliability, and efficiency of the software.",
      "- Helped the company make better decisions when building and improving app functionality on all platforms by conducting user interviews and analyzing user behavior data.",
    ],
  },
  {
    title: "NYSC PPA",
    company_name: "GDSS Gwashi, Bukkuyum, Zamfara.",
    icon: edunet,
    iconBg: "#161329",
    date: "2017 - 2018",
    points: [
      "Class and subject teacher, Conducted tutorials to help build  Student’s reading skills and comprehension.",
      "Prepared lesson plans and instructional materials to enhance the learning experience.",
      "Assessed and evaluated student performance through assignments, tests, and examinations.",
    ],
  },
  {
    title: "Intern",
    company_name: "Krystal Network Solutions.",
    icon: edunet,
    iconBg: "#161329",
    date: "2017 - 2018",
    points: [
      "- Presented and communicated insights in order to help shape long-term product strategy.",
      "- Collaborated with cross-functional teams including designers, developers, and marketers to deliver high-quality products and services that meet client needs.",
      "- Assisted in the development and implementation of marketing campaigns to promote company services.",
    ],
  },
  {
    title: "Intern",
    company_name: "Ministry of Science & Technology (MOST), Alausa.",
    icon: edunet,
    iconBg: "#161329",
    date: "2017 - 2018",
    points: [
      "- IT Support, hardware and software installations, network configuration, and troubleshooting technical issues.",
      "- Assisted in maintaining the organization's IT infrastructure, including servers, workstations, and network devices.",
      "- Provided technical support to end-users, resolving issues related to software applications, hardware malfunctions, and network connectivity.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
