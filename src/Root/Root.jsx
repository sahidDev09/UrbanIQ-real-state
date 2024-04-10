import { Outlet } from "react-router-dom";
import Navbar from "../components/pages/Shared/Navbar";

const Root = () => {
    return (
        <div className=" container mx-auto font-pop">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;