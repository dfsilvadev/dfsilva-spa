import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "phosphor-react";
import { useEffect } from "react";

import { useScroll } from "@/presenters/contexts/ScrollContext";
import { SOCIAL_URLS } from "@/lib/constants/social";

import "./styles.scss";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/", count: null },
  { label: "Sobre", href: "#about", count: null },
  { label: "Projetos", href: "#projects", count: null },
  { label: "Contato", href: "#contact", count: null },
];

const socialLinks = [
  { label: "Instagram", href: SOCIAL_URLS.INSTAGRAM },
  { label: "LinkedIn", href: SOCIAL_URLS.LINKEDIN },
  { label: "GitHub", href: SOCIAL_URLS.GITHUB },
  { label: "Twitter", href: SOCIAL_URLS.TWITTER },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Menu({ isOpen, onClose }: MenuProps) {
  const { scrollToSection } = useScroll();

  const currentTime = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      onClose();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();

    setTimeout(() => {
      if (href === "/" || href === "#" || href === "") {
        scrollToSection(0);
        return;
      }
      if (href.startsWith("#")) {
        scrollToSection(href);
      }
    }, 120);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="menu__backdrop"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="menu__panel"
            style={{ transformOrigin: "top right" }}
          >
            <div className="menu__panel-inner">
              {/* Header */}
              <div className="menu__header">
                <div className="menu__header-info">
                  <span className="menu__header-place">
                    Suzano, SP - Brasil
                  </span>{" "}
                  {currentTime}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="menu__close"
                  aria-label="Fechar menu"
                >
                  Fechar
                  <span className="menu__close-icon">
                    <X size={16} weight="bold" />
                  </span>
                </button>
              </div>

              <div className="menu__content">
                <nav className="menu__nav">
                  <ul className="menu__list">
                    {menuItems.map((item, i) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: 0.1 + i * 0.05,
                            duration: 0.3,
                            ease: easeOut,
                          },
                        }}
                        exit={{ opacity: 0, x: -10 }}
                        className="menu__item"
                      >
                        <button
                          type="button"
                          onClick={() => handleLinkClick(item.href)}
                          className="menu__link"
                        >
                          <span className="menu__link-label">{item.label}</span>
                          {item.count != null && (
                            <span className="menu__link-count">
                              {item.count}
                            </span>
                          )}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="menu__social">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.1 + (i + menuItems.length) * 0.05,
                          duration: 0.3,
                          ease: easeOut,
                        },
                      }}
                      exit={{ opacity: 0, x: -10 }}
                      className="menu__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <ArrowUpRight size={12} weight="bold" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="menu__footer"
              >
                <a
                  href="mailto:dfsilva.dxp@gmail.com?subject=Olá,%20Daniel!"
                  className="menu__footer-email"
                >
                  dfsilva.dxp@gmail.com
                  <ArrowUpRight size={16} weight="bold" />
                </a>
              </motion.div>
            </div>

            <div className="menu__indicator" aria-hidden />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
