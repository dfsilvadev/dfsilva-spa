import { Outlet } from "react-router";
import Cursor from "../components/ui/cursor";
import "./AppLayout.scss";

export function AppLayout() {
  return (
    <div className="app-layout">
      <main>
        <Cursor />
        <Outlet />
      </main>
    </div>
  );
}
