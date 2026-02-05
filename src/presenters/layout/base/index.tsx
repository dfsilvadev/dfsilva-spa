import { Outlet } from "react-router";

import { Cursor, Navbar } from "@/presenters/components/ui";

import Footer from "../footer";
import "./styles.scss";

const Base = () => {
  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <Cursor />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Base;
