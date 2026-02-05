import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import "./styles.scss";

interface BurgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function BurgerButton({ isOpen, onToggle }: BurgerButtonProps) {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={buttonRef}
      className={`burger-button ${isOpen ? "burger-button--active" : ""}`}
      role="button"
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      onClick={onToggle}
    >
      <div className="burger-button__lines">
        <span ref={line1Ref} className="burger-button__line" />
        <span ref={line2Ref} className="burger-button__line" />
      </div>
    </div>
  );
}
