import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Base = lazy(() => import("../layout/base"));
const Home = lazy(() =>
  import("../pages/Home").then((m) => ({ default: m.Home }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={null}>
        <Base />
      </Suspense>
    ),
    children: [{ index: true, element: <Home /> }],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
