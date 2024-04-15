import { Link, useNavigate } from "react-router-dom";
import googlelogin from "../../../assets/Googlelogin.png";
import githubLogin from "../../../assets/Githublogin.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, googleLogin, gitLogin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        toast.success("logged in");

        // redirect to same about page after logged in

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="lg:px-40 md:px-10 lg:py-8 mainLogin p-2 md:p-0">
      <Helmet>
        <title>UrbanIQ | login</title>
      </Helmet>
      <div className=" bg-slate-200 grid lg:grid-cols-2 rounded-xl">
        <div className=" flex flex-col gap-3 p-10 justify-between">
          <h1 className=" text-3xl font-bold text-center">Login</h1>
          <div className="flex flex-col gap-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3">
              <label className="ml-4">Email</label>
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
                  name="email"
                  placeholder="Enter your E-mail"
                  required
                  {...register("email", { required: true })}
                />
              </label>

              <label className=" ml-4">Password</label>

              <label className="input flex items-center justify-between gap-2 rounded-full h-[60px]">
                <div className=" flex items-center w-full gap-2 ">
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
                    name="password"
                    placeholder="Enter your secret password"
                    required
                    {...register("password", { required: true })}
                  />
                </div>
                <IoMdEyeOff className=" text-xl text-gray-600"></IoMdEyeOff>
              </label>

              <a className="text-sm ml-4 text-red-600 cursor-pointer">
                Forget your password
              </a>
              <input
                type="submit"
                className="grow mt-6 btn btn-success w-full rounded-full text-white"
                value="Login"
              />
            </form>
            <p className=" text-center mt-4">Login with other methods</p>

            {/* other methods google and git */}

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div
                onClick={() => googleLogin()}
                className=" cursor-pointer google bg-slate-400 hover:bg-slate-700 hover:border border-green-500 p-2 rounded-md flex items-center gap-2">
                <div className=" p-2 bg-slate-200 w-10 rounded-md">
                  <img src={googlelogin} alt="" />
                </div>
                <h1 className=" text-white text-sm lg:text-normal">
                  With <span className=" font-semibold">Google</span>
                </h1>
              </div>

              <div
                onClick={() => gitLogin()}
                className=" hover:border border-green-500 cursor-pointer github bg-slate-800 hover:bg-slate-500 p-2 rounded-md flex items-center gap-2">
                <div className=" p-2 bg-slate-200 w-10 rounded-md">
                  <img src={githubLogin} alt="" />
                </div>
                <h1 className=" text-white text-sm lg:text-normal">
                  With <span className=" font-semibold">Github</span>
                </h1>
              </div>
            </div>
          </div>

          {/* redicret register page */}

          <div className=" flex mx-auto">
            <h1 className=" flex items-center lg:gap-3 text-sm mx-auto ">
              Do not have any account
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
              <Link to="/register">
                <button className=" font-bold text-blue-400">Register</button>
              </Link>
            </h1>
          </div>
        </div>

        {/* image container */}
        <div className="loginsideimg hidden lg:inline md:inline ">
          <img
            className=" w-full h-full rounded-tr-xl rounded-br-xl object-cover object-center"
            src="https://i.ibb.co/sPWPXB0/login.jpg"
            alt=""
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
