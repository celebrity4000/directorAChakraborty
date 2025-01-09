import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";

const routes = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/piklur-janala",
    element: <App />,
  },
  {
    path: "/jah-kala",
    element: <App />,
  },
  {
    path: "/bonosundari",
    element: <App />,
  },
  {
    path: "/mallik-bari",
    element: <App />,
  },
  {
    path: "/nonte-fonte",
    element: <App />,
  },
  {
    path: "/o-abhagi",
    element: <App />,
  },
  {
    path: "/khacha",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);
