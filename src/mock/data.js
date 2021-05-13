import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Audebert Adrien', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Full Stack Web Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Adrien Audebert',
  subtitle: 'Js Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'construction.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/AudebertAdrien/construction-web-site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crimes-in-leicester.png',
    title: 'Crimes in leicester indexed',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'audebertadrien.pro@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AudebertAdrien',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adrien-audebert/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AudebertAdrien',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
