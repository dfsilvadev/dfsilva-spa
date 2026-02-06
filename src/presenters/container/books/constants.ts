import type { Book } from "./types";

import cleanCode from "../../assets/books/clean-code.png";
import facilitatingSoftwareArchitecture from "../../assets/books/facilitating-software-architecture.png";
import firstAndForemost from "../../assets/books/first-and-foremost.png";
import fundamentalsOfSoftwareArchitecture from "../../assets/books/fundamentals-of-software-architecture.png";
import learningTs from "../../assets/books/learning-ts.png";
import patternJs from "../../assets/books/patterns-js.png";
import refactor from "../../assets/books/refactor.png";
import yourCareer from "../../assets/books/your-career.png";

export const BOOKS: Book[] = [
  {
    id: "padroes-javascript",
    title: "Padrões Javascript",
    author: "Stoyan Stefanov",
    category: "Desenvolvimento Web",
    image: patternJs,
  },
  {
    id: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Desenvolvimento de Software",
    image: cleanCode,
  },
  {
    id: "aprendendo-typescript",
    title: "Aprendendo Typescript",
    author: "Josh Goldberg",
    category: "Sistemas de Tipagem",
    image: learningTs,
  },
  {
    id: "refatoracao",
    title: "Refatoração",
    author: "Martin Fowler",
    category: "Evolução de Software",
    image: refactor,
  },
  {
    id: "fundamentos-arquitetura",
    title: "Fundamentos da arquitetura de software",
    author: "Mark Richards",
    category: "Design de Sistemas",
    image: fundamentalsOfSoftwareArchitecture,
  },
  {
    id: "facilitando-arquitetura",
    title: "Facilitando a arquitetura de software",
    author: "Andrew Harmel-Law",
    category: "Design de Sistemas",
    image: facilitatingSoftwareArchitecture,
  },
  {
    id: "primeiro-mais-importante",
    title: "Primeiro o mais importante",
    author: "Stephen R. Covey",
    category: "Eficácia Organizacional",
    image: firstAndForemost,
  },
  {
    id: "seja-egoista-carreira",
    title: "Seja egoísta com sua carreira",
    author: "Luciano Santos",
    category: "Autogestão",
    image: yourCareer,
  },
];

export const FLOATING_IMAGE = {
  width: 340,
  height: 230,
  rotate: -5,
} as const;

export const SPRING_CONFIG = {
  stiffness: 200,
  damping: 25,
  mass: 0.3,
} as const;

export const TRANSITION = {
  floating: {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
  imageOpacity: {
    duration: 0.3,
  },
} as const;

export const INACTIVE_OPACITY = 0.3;
