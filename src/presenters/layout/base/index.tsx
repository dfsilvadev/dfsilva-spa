import { Outlet } from "react-router";

import { Cursor } from "@/presenters/components/ui";

import Footer from "../footer";

import "./styles.scss";

const Base = () => {
  return (
    <div className="app-layout">
      <main id="main-content">
        <Cursor />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Base;
