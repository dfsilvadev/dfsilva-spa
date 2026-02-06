import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";

import { Cursor } from "./presenters/components/ui";

import "./styles/index.scss";

import App from "./presenters/app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <Cursor />
    <App />
  </StrictMode>
);
