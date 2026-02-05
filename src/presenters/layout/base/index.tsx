import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";

import { Cursor } from "@/presenters/components/ui";

import Footer from "../footer";
import "./styles.scss";

const Base = () => {
  const { t } = useTranslation();

  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        {t("a11y.skipToContent")}
      </a>
      <main id="main-content">
        <Cursor />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Base;
