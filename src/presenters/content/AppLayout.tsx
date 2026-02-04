import { Outlet } from "react-router";

import { Cursor, Navbar } from "../components/ui";

import "./AppLayout.scss";

export function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Cursor />
        <Outlet />
      </main>
    </div>
  );
}
