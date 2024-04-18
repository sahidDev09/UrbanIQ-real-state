import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/urbanIQ_logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import stockProfile from "../../../assets/profile.png";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handlelogOut = () => {
    toast.error("Logged out");
    setInterval(() => {
      logOut();
    }, 1000);
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/team">Team</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink hrefLang="#contact" to="/contact">
          <a href="#contact">Contact</a>
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/update">Update profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent btn-ghost lg:hidden z-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
          </ul>
        </div>
        <Link to="/">
          <img className=" w-40" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" flex items-center gap-2">
            <div
              data-tip={user.displayName}
              className=" tooltip tooltip-bottom w-12 h-12 rounded-full border p-1">
              <img
                className=" object-cover rounded-full h-full w-full"
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL || stockProfile}
              />
            </div>

            <Link>
              <button
                onClick={handlelogOut}
                className="btn bg-success text-white">
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-success text-white">Login</button>
          </Link>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Navbar;
