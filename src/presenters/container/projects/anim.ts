import { gsap, Power2 } from "gsap";

import work1 from "../../assets/images/projects/work-1.png";
import work2 from "../../assets/images/projects/work-2.png";
import work3 from "../../assets/images/projects/work-3.png";

export type Project = {
  title: string;
  image: string;
  repositoryURL: string;
  technologies: string[];
  category: "Front-end" | "Back-end" | "Fullstack" | "Mobile";
};

export const projects: Project[] = [
  {
    title: "Contact App",
    image: work1,
    repositoryURL: "https://github.com/dfsilvadev/contacts-client",
    technologies: ["React.js", "Node.js"],
    category: "Fullstack",
  },
  {
    title: "DT Money",
    image: work2,
    repositoryURL: "https://github.com/dfsilvadev/ignite-dtmoney-v2",
    technologies: ["React.js", "TypeScript", "Jest", "Cypress"],
    category: "Front-end",
  },
  {
    title: "JWT Auth Service",
    image: work3,
    repositoryURL: "https://github.com/dfsilvadev/jwt-auth-service",
    technologies: ["Node.js", "TypeScript", "JWT", "Express"],
    category: "Back-end",
  },
];

export function startProgressBar(
  index: number,
  progressRefs: (HTMLSpanElement | null)[],
  onNextSlide: () => void
) {
  const el = progressRefs[index];
  if (el) {
    gsap.fromTo(
      el,
      { width: "0%" },
      {
        width: "100%",
        duration: 7,
        ease: Power2.easeInOut,
        onComplete: onNextSlide,
      }
    );
  }
}

export function stopProgressBar(
  index: number,
  progressRefs: (HTMLSpanElement | null)[],
  reset: boolean = false
) {
  const el = progressRefs[index];
  if (el) {
    gsap.killTweensOf(el);
    gsap.set(el, { width: reset ? "100%" : "0%" });
  }
}

export function nextSlide(
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  projectsLength: number
) {
  setActiveIndex((prevIndex) => (prevIndex + 1) % projectsLength);
}

export function handleTitleClick(
  index: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
) {
  setActiveIndex(index);
}
