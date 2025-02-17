import { create } from 'zustand';

export const projects = [
  {
    id: 0,
    date: '20.05.2024',
    title: '«In Pulse»: web-site design',
    description: 'Web-site',
    img: '/img/interface/bg-footer-case4.png',
    imgMobile: '/img/interface/bg-footer-case4.mobile.png',
    glare: '/img/interface/bg-footer-bag4.png',
    link: 'https://www.behance.net/gallery/198984227/In-Pulse-web-site-design',
    tags: [
      { name: 'Marketing' },
      { name: 'Branding' },
      { name: 'Illustations' },
    ],
  },
  {
    id: 1,
    date: '10.08.2024',
    title: 'Content for Saku Monsters / Pt. 1',
    description: 'Illustration and animation',
    img: '/img/interface/bg-footer-case2.png',
    imgMobile: '/img/interface/bg-footer-case2.mobile.png',
    glare: '/img/interface/bg-footer-bag2.png',
    link: 'https://www.behance.net/gallery/204696285/Content-for-Saku-Monsters-Pt-1',
    tags: [
      { name: 'UX/UI Disign' },
      { name: 'Branding' },
      { name: 'Illustations' },
    ],
  },
  {
    id: 2,
    date: 'Soon',
    title: 'Mel’s Bar: website for the gambling platform',
    description: 'Web-site',
    img: '/img/interface/bg-footer-case3.png',
    imgMobile: '/img/interface/bg-footer-case3.mobile.png',
    glare: '/img/interface/bg-footer-bag3.png',
    link: 'https://www.behance.net/gallery/213083385/UXUI-Website-redesign-for-online-casino-Mels-Bar',
    tags: [
      { name: 'Marketing' },
      { name: 'Branding' },
      { name: 'Illustations' },
    ],
  },
];

interface ProjectState {
  currentProject: (typeof projects)[number];
  setProject: (project: any) => void;
}

const useProjectStore = create<ProjectState>((set) => ({
  currentProject: projects[0],
  setProject: (project: (typeof projects)[number]) =>
    set({ currentProject: project }),
}));

export default useProjectStore;
