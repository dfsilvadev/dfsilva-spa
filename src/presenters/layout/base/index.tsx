import { useEffect } from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";

import Footer from "../footer";

import "./styles.scss";

function setViewportHeight() {
  const vh = window.visualViewport?.height ?? window.innerHeight;
  document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
}

const Base = () => {
  const { t } = useTranslation();

  useEffect(() => {
    setViewportHeight();

    window.visualViewport?.addEventListener("resize", setViewportHeight);
    window.addEventListener("resize", setViewportHeight);
    window.addEventListener("orientationchange", setViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("orientationchange", setViewportHeight);
    };
  }, []);

  return (
    <div className="app-layout">
      <a className="skip-link" href="#main-content">
        {t("a11y.skipToContent")}
      </a>
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Base;
