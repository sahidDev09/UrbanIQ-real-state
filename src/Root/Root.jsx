import { Outlet } from "react-router-dom";
import Navbar from "../components/pages/Shared/Navbar";
import Footer from "../components/pages/Shared/Footer";

const Root = () => {
  return (
    <div className="mainroot">
      <div className="container md:container lg:container mx-auto font-pop">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
