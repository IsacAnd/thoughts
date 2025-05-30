import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
