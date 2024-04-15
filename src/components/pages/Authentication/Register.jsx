/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          //navigate route

          navigate(from);
        }
      })
      .catch((error) => {
        toast.error(error.message + "Something went wrong");
      });
  };

  return (
    <div className="lg:px-40 md:px-10 lg:py-8 mainLogin p-2 md:p-0">
      <Helmet>
        <title>UrbanIQ | Register</title>
      </Helmet>
      <div className="bg-slate-200 grid lg:grid-cols-2 rounded-xl">
        <div className="flex flex-col gap-3 p-10 justify-between">
          <h1 className="text-3xl font-bold text-center mb-4">
            Create Account
          </h1>
          <div className="flex flex-col gap-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3">
              <label htmlFor="username" className="ml-4">
                Username
              </label>
              <label className="input flex items-center gap-2 rounded-full h-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                  {...register("fullName", { required: true })}
                />
              </label>

              <label htmlFor="photoURL" className="ml-4">
                Photo URL
              </label>
              <label className="input flex items-center gap-2 rounded-full h-[60px]">
                <MdAddPhotoAlternate className="text-lg text-gray-500" />
                <input
                  type="text"
                  className="grow"
                  id="photoURL"
                  name="photoURL"
                  placeholder="https://example.jpeg"
                  {...register("photoURL", { required: true })}
                />
              </label>

              <label htmlFor="email" className="ml-4">
                Email
              </label>
              <label className="input flex items-center gap-2 rounded-full h-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  id="email"
                  name="email"
                  placeholder="Enter your E-mail"
                  {...register("email", { required: true })}
                />
              </label>

              <label htmlFor="password" className="ml-4">
                Password
              </label>
              <label className="input flex items-center justify-between gap-2 rounded-full h-[60px]">
                <div className="flex items-center w-full gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    id="password"
                    name="password"
                    placeholder="Set your secret password"
                    {...register("password", { required: true })}
                  />
                </div>
                <IoMdEyeOff className="text-xl text-gray-600" />
              </label>

              <input
                type="submit"
                className="grow mt-6 btn btn-success w-full rounded-full text-white"
                value="Register Now"
              />
            </form>
          </div>

          {/* Redirect to login page */}
          <div className="flex mx-auto mt-4">
            <h1 className="flex items-center lg:gap-3 text-sm mx-auto">
              Already have an account
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
              <Link to="/login" className="font-bold text-blue-400">
                Login
              </Link>
            </h1>
          </div>
        </div>

        {/* Image container */}
        <div className="loginsideimg hidden lg:inline md:inline">
          <img
            className="w-full h-full rounded-tr-xl rounded-br-xl object-cover object-center"
            src="https://i.ibb.co/DDy7rvk/regi.jpg"
            alt="Registration"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
