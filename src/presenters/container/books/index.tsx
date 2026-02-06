import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Grid,
  GridColumn,
  SectionDivider,
  SectionHeading,
  TypingText,
} from "../../components/ui";

import { BookListItem, FloatingBookImage } from "./components";

import { BOOKS } from "./constants";
import { useFloatingImagePosition } from "./useFloatingImagePosition";

import "./styles.scss";

export default function Books() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { containerRef, springX, springY, handleMouseMove } =
    useFloatingImagePosition();

  return (
    <section id="books" className="books">
      <header className="books__header">
        <Grid>
          <GridColumn className="books__header-column">
            <SectionHeading>
              <TypingText>{t("books.title")}</TypingText>
            </SectionHeading>
          </GridColumn>
        </Grid>
      </header>

      <div className="books__content">
        <Grid>
          <GridColumn className="books__gallery-column">
            <div
              ref={containerRef}
              className="books__gallery"
              onMouseMove={handleMouseMove}
            >
              <FloatingBookImage
                books={BOOKS}
                activeIndex={activeIndex}
                springX={springX}
                springY={springY}
              />

              {BOOKS.map((book, index) => (
                <BookListItem
                  key={book.id}
                  book={book}
                  index={index}
                  activeIndex={activeIndex}
                  onMouseEnter={setActiveIndex}
                  onMouseLeave={() => setActiveIndex(null)}
                  onMouseMove={handleMouseMove}
                />
              ))}

              <div className="books__border-bottom" />
            </div>
          </GridColumn>
        </Grid>
      </div>

      <SectionDivider />
    </section>
  );
}
