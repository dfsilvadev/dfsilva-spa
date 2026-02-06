import { motion } from "framer-motion";

import { FLOATING_IMAGE, TRANSITION } from "../constants";

import type { Book } from "../types";

type MotionValue = ReturnType<typeof import("framer-motion").useSpring>;

type FloatingBookImageProps = {
  books: Book[];
  activeIndex: number | null;
  springX: MotionValue;
  springY: MotionValue;
};

const FloatingBookImage = ({
  books,
  activeIndex,
  springX,
  springY,
}: FloatingBookImageProps) => {
  const isVisible = activeIndex !== null;

  return (
    <motion.div
      className="books__floating-image"
      style={{
        x: springX,
        y: springY,
        width: FLOATING_IMAGE.width,
        height: FLOATING_IMAGE.height,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        rotate: FLOATING_IMAGE.rotate,
      }}
      transition={TRANSITION.floating}
    >
      {books.map((book, index) => (
        <motion.img
          key={book.id}
          src={book.image}
          alt={book.title}
          className="books__floating-image-item"
          animate={{
            opacity: activeIndex === index ? 1 : 0,
          }}
          transition={TRANSITION.imageOpacity}
        />
      ))}
    </motion.div>
  );
};

export default FloatingBookImage;
