import type { Book } from "./types";

import book1 from "../../assets/images/books/book-1.png";
import book2 from "../../assets/images/books/book-2.png";
import book3 from "../../assets/images/books/book-3.png";
import book4 from "../../assets/images/books/book-4.png";
import book5 from "../../assets/images/books/book-5.png";
import book6 from "../../assets/images/books/book-6.png";
import book7 from "../../assets/images/books/book-7.png";
import book8 from "../../assets/images/books/book-8.png";

export const BOOKS: Book[] = [
  {
    id: "padroes-javascript",
    title: "Padrões Javascript",
    author: "Stoyan Stefanov",
    category: "Desenvolvimento Web",
    image: book1,
  },
  {
    id: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Desenvolvimento de Software",
    image: book2,
  },
  {
    id: "aprendendo-typescript",
    title: "Aprendendo Typescript",
    author: "Josh Goldberg",
    category: "Sistemas de Tipagem",
    image: book3,
  },
  {
    id: "refatoracao",
    title: "Refatoração",
    author: "Martin Fowler",
    category: "Evolução de Software",
    image: book4,
  },
  {
    id: "fundamentos-arquitetura",
    title: "Fundamentos da arquitetura de software",
    author: "Mark Richards",
    category: "Design de Sistemas",
    image: book5,
  },
  {
    id: "facilitando-arquitetura",
    title: "Facilitando a arquitetura de software",
    author: "Andrew Harmel-Law",
    category: "Design de Sistemas",
    image: book6,
  },
  {
    id: "primeiro-mais-importante",
    title: "Primeiro o mais importante",
    author: "Stephen R. Covey",
    category: "Eficácia Organizacional",
    image: book7,
  },
  {
    id: "seja-egoista-carreira",
    title: "Seja egoísta com sua carreira",
    author: "Luciano Santos",
    category: "Autogestão",
    image: book8,
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
