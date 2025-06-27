// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import cclms from './assets/education_logo/cclms.jpg';
import masai from './assets/education_logo/masaiSchool.jpg';

// Project Section Logo's
import Zara from './assets/work_logo/Zara.png';
import Nukri from './assets/work_logo/Nukri.png';
import Pharma from './assets/work_logo/Pharma.png';
import Toggle from './assets/work_logo/Toggle.png';
import YumVoice from './assets/work_logo/YumVoice.png';
import Loan from './assets/work_logo/Loan.png';








export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      img: masai,
      school: "Masai School",
      date: "july 2024 - July 2025",
      degree: "Full Stack Developer",
    },
    {
      id: 1,
      img: cclms,
      school: "Contai College of Learning & Management Science",
      date: "july 2018 - Aug 2021",
      degree: "Bachelor of Computer Applications",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "zara clone",
      description:
        "Zara.com Clone | Full-Stack E-Commerce Web App A fully functional clone of Zara.com.",
      image: Zara,
      tags: ["HTML", "CSS", "JavaScript", "React JS","Chakra UI","Redux", "API"],
      github: "https://github.com/Biman721443/zara-clone",
      webapp: "https://zara-clone-liart.vercel.app/",
    },
    {
      id: 1,
      title: "Hire Me",
      description:
"Naukri.com is a database of resume, jobs, and recruitment consultants. Conceived as a platform of job seekers and hiring managers .",
      image: Nukri,
      tags: ["React JS", "Redux Thunk", "Chakra-UI", "JSON Server", "HTML", "Axios", "JavaScript"],
      github: "https://github.com/piyush-agrawal6/Naukri.com-clone",
      webapp: "https://hire-me-clone.netlify.app/login",
    },
    {
      id: 2,
      title: "PharmHub",
      description:
        "PharmHub – AI-Powered Online Pharmacy Platform A React.js and Firebase based e-pharmacy platform enabling users to Search & Purchase medicines & healthcare products,Upload Prescriptions for digital review and Get AI-Based Suggestions for personalized medicine recommendations",
      image: Pharma,
      tags: ["React JS", "Firebase", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Biman721443/PharmHub",
      webapp: "https://pharm-hub.vercel.app/",
    },
    
       {
      id: 3,
      title: "toggl/track.com",
      description:
"Toggl Track tracks time blocks, optionally labeled with a task, a project, and tags. Time can be tracked through a start/stop button, manual entry, or dragging and resizing time blocks in a calendar view. With the browser extension, Toggl Track has time tracking integrations with over 100 websites.",
      image: Toggle,
      tags: ["React JS","Redux", "Firebase", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Biman721443/wrong-drain-3904",
      webapp: "https://toggl-track-clone.vercel.app/",
    },
     {
      id: 4,
      title: "YumVoice",
      description:
"VoiceAssist YumVoice is a web app for hands-free food ordering, utilizing React and Firebase for an interactive user experience. Key features include voice search, secure authentication, and real-time database integration.",
      image: YumVoice,
      tags: ["React JS", "Redux", "Firebase","HTML", "CSS", "JavaScript"],
      github: "https://github.com/Biman721443/YumVoice",
      webapp: "https://yum-voice.vercel.app/",
    },
     {
      id: 5,
      title: "Loan Application",
      description:
        "The Loan Application Project is a full-stack web application designed to provide a seamless experience for users and administrators to manage loans. The application offers functionalities like signing up, logging in, calculating loans, filling out loan forms, and viewing loan details through a user-friendly dashboard. Admins can manage loans.",
      image: Loan,
      tags: ["React JS","Redux","Api","MongoDB", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sagar-Kumar3099/creative_coders17",
      webapp: "https://fanciful-brioche-eb8947.netlify.app/",
    },
    
  ];  