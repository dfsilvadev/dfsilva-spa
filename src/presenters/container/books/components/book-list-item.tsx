import { motion } from "framer-motion";

import { INACTIVE_OPACITY } from "../constants";

import type { Book } from "../types";

type BookListItemProps = {
  book: Book;
  index: number;
  activeIndex: number | null;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const BookListItem = ({
  book,
  index,
  activeIndex,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
}: BookListItemProps) => {
  const isDimmed = activeIndex !== null && activeIndex !== index;
  const isActive = activeIndex === index;

  const itemClassName = [
    "books__item",
    isActive && "books__item--active",
    isDimmed && "books__item--dimmed",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      className={itemClassName}
      style={{ zIndex: index + 1 }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <div className="books__item-content">
        <motion.h3
          className="books__item-title"
          style={{ opacity: isDimmed ? INACTIVE_OPACITY : 1 }}
        >
          {book.title}
        </motion.h3>
        <span
          className="books__item-author"
          style={{ opacity: isDimmed ? INACTIVE_OPACITY : 1 }}
        >
          {book.author}
        </span>
      </div>
      <span
        className="books__item-category"
        style={{ opacity: isDimmed ? INACTIVE_OPACITY : 1 }}
      >
        {book.category}
      </span>
    </motion.div>
  );
};

export default BookListItem;
