import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import PropertyDetails from "../components/pages/Home/CardContainer/PropertyDetails";
import Error from "../Root/Error";
import Login from "../components/pages/Authentication/Login";
import Register from "../components/pages/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path : '/register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
