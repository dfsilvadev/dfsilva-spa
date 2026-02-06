import { gsap } from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import "./styles.scss";

interface BurgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const BurgerButton = forwardRef<HTMLButtonElement, BurgerButtonProps>(
  function BurgerButton({ isOpen, onToggle }, ref) {
    const { t } = useTranslation();
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const setRefs = (el: HTMLButtonElement | null) => {
      (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current =
        el;
      if (typeof ref === "function") ref(el);
      else if (ref) ref.current = el;
    };

    useEffect(() => {
      if (!line1Ref.current || !line2Ref.current) return;

      const line1 = line1Ref.current;
      const line2 = line2Ref.current;

      if (isOpen) {
        // Animação para X
        gsap.to(line1, {
          rotation: 45,
          y: 5,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(line2, {
          rotation: -45,
          y: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // Animação para hamburger
        gsap.to(line1, {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(line2, {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }, [isOpen]);

    return (
      <button
        ref={setRefs}
        type="button"
        className={`burger-button ${isOpen ? "burger-button--active" : ""}`}
        aria-label={isOpen ? t("menu.closeMenu") : t("menu.openMenu")}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <div className="burger-button__lines">
          <span ref={line1Ref} className="burger-button__line" />
          <span ref={line2Ref} className="burger-button__line" />
        </div>
      </button>
    );
  }
);

export default BurgerButton;
