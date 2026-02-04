import { Outlet } from "react-router";

import { Cursor, Navbar } from "@/presenters/components/ui";

import "./styles.scss";

const Base = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Cursor />
        <Outlet />
      </main>
    </div>
  );
};

export default Base;
