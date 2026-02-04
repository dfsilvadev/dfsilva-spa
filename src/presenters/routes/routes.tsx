import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Base from "../layout/base";

import { Home } from "@/presenters/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
