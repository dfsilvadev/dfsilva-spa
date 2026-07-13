import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "phosphor-react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Magnetic from "../magnetic";
import SplitText from "../split-text";
import Status from "../status";

import { SOCIAL_URLS } from "@/lib/constants/social";
import { useScroll } from "@/presenters/contexts/ScrollContext";

import "./styles.scss";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  burgerButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const socialLinks = [
  { label: "ig", title: "Instagram", href: SOCIAL_URLS.INSTAGRAM },
  { label: "lk", title: "LinkedIn", href: SOCIAL_URLS.LINKEDIN },
  { label: "gh", title: "GitHub", href: SOCIAL_URLS.GITHUB },
  { label: "tw", title: "Twitter", href: SOCIAL_URLS.TWITTER },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Menu({ isOpen, onClose, burgerButtonRef }: MenuProps) {
  const { t, i18n } = useTranslation();
  const { scrollToSection } = useScroll();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { labelKey: "menu.home" as const, href: "/", count: null },
    { labelKey: "menu.about" as const, href: "#about", count: null },
    { labelKey: "menu.projects" as const, href: "#projects", count: null },
    { labelKey: "menu.contact" as const, href: "#contact", count: null },
  ];

  const locale = i18n.language?.startsWith("en") ? "en" : "pt-BR";
  const currentTime = new Date().toLocaleTimeString(locale, {
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
      if (e.key === "Escape" && isOpen) {
        burgerButtonRef.current?.focus();
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, burgerButtonRef]);

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

  // Foco no botão fechar ao abrir o menu
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Focus trap: mantém o foco dentro do painel
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;
    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    burgerButtonRef.current?.focus();
    onClose();
  };

  const handleLinkClick = (href: string) => {
    handleClose();

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
            onClick={handleClose}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: easeOut }}
            ref={panelRef}
            className="menu__panel"
            style={{ transformOrigin: "top right" }}
          >
            <div className="menu__panel-inner">
              {/* Header */}
              <div className="menu__header">
                <div className="menu__header-info">
                  <span className="menu__header-place">
                    <Status /> {t("menu.location")}
                  </span>{" "}
                  {currentTime}
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={handleClose}
                  className="menu__close"
                  aria-label={t("menu.closeMenu")}
                >
                  {t("menu.close")}
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
                        key={item.labelKey}
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
                          <span className="menu__link-label">
                            {t(item.labelKey)}
                          </span>
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
                      title={link.title}
                      aria-label={`${link.title} ${t("a11y.opensNewWindow")}`}
                    >
                      <SplitText
                        className="menu__social-link-label"
                        firstSplit={link.label}
                        lastSplit={link.label}
                      />
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
                <Magnetic>
                  <a
                    href="mailto:dfsilva.dxp@gmail.com?subject=Olá,%20Daniel!"
                    className="menu__footer-email"
                  >
                    dfsilva.dxp@gmail.com
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                </Magnetic>
              </motion.div>
            </div>

            <div className="menu__indicator" aria-hidden />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
