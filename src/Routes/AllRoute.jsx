import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import PropertyDetails from "../components/pages/Home/CardContainer/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/property/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: () => fetch("/property.json"),
      },
    ],
  },
]);

export default router;
