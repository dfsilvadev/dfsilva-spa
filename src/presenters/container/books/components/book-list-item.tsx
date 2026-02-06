import { motion } from "framer-motion";

import { INACTIVE_OPACITY } from "../constants";

import type { Book } from "../types";

type BookListItemProps = {
  book: Book;
  index: number;
  activeIndex: number | null;
  onSelect: (index: number) => void;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  ariaLabel: string;
};

const BookListItem = ({
  book,
  index,
  activeIndex,
  onSelect,
  onMouseMove,
  ariaLabel,
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(index);
    }
  };

  return (
    <li className="books__list-item" style={{ zIndex: index + 1 }}>
      <motion.button
        type="button"
        className={itemClassName}
        onMouseEnter={() => onSelect(index)}
        onMouseLeave={() => onSelect(-1)}
        onFocus={() => onSelect(index)}
        onMouseMove={onMouseMove}
        onClick={() => onSelect(isActive ? -1 : index)}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
        aria-pressed={isActive}
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
      </motion.button>
    </li>
  );
};

export default BookListItem;
