import { Outlet } from "react-router";

import { Navbar } from "@/presenters/components/ui";

import LineCursor from "@/presenters/components/ui/line-cursor";
import "./styles.scss";

const Base = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        {/* <Cursor /> */}
        <LineCursor />
        <Outlet />
      </main>
    </div>
  );
};

export default Base;
