import { Outlet } from "react-router";

import { Cursor, Navbar } from "@/presenters/components/ui";

import Footer from "../footer";
import "./styles.scss";

const Base = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Cursor />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Base;
