import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import PropertyDetails from "../components/pages/Home/CardContainer/PropertyDetails";
import Error from "../Root/Error";
import Login from "../components/pages/Authentication/Login";
import Register from "../components/pages/Authentication/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import UpadateProfile from "../components/pages/Profile/UpadateProfile";
import Team from "../components/pages/Team/Team";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Home/Contact/Contact";

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
        path: "/team",
        element: (
          <PrivateRoute>
            <Team></Team>
          </PrivateRoute>
        ),
      },

      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/property.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <UpadateProfile></UpadateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
