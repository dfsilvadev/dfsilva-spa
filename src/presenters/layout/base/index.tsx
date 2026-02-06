import { Outlet } from "react-router";

import Footer from "../footer";

import "./styles.scss";

const Base = () => {
  return (
    <div className="app-layout">
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Base;
