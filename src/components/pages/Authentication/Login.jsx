import { Link } from "react-router-dom";
import googlelogin from "../../../assets/Googlelogin.png";
import githubLogin from "../../../assets/Githublogin.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="lg:px-40 md:px-10 lg:py-8 mainLogin p-2 md:p-0">
      <div className=" bg-slate-200 grid lg:grid-cols-2 rounded-xl">
        <div className=" flex flex-col gap-3 p-10 justify-between">
          <h1 className=" text-3xl font-bold text-center">Login</h1>
          <div className=" flex flex-col gap-3">
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
              />
            </label>

            <label className=" ml-4">Password</label>
            <label className="input flex items-center gap-2 rounded-full h-[60px]">
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
              />
            </label>
            <a className="text-sm ml-4 text-red-600 cursor-pointer">
              Forget your password
            </a>
            <Link>
              <button className=" mt-6 btn btn-success w-full rounded-full text-white">
                Login
              </button>
            </Link>
            <p className=" text-center mt-4">Login with other methods</p>

            {/* other methods google and git */}

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className=" cursor-pointer google bg-slate-400 p-2 rounded-md flex items-center gap-2">
                <div className=" p-2 bg-slate-200 w-10 rounded-md">
                  <img src={googlelogin} alt="" />
                </div>
                <h1 className=" text-white text-sm lg:text-normal">
                  With <span className=" font-semibold">Google</span>
                </h1>
              </div>

              <div className=" cursor-pointer github bg-slate-800 p-2 rounded-md flex items-center gap-2">
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
        <div className=" hidden lg:inline">
          <img
            className=" rounded-tr-xl rounded-br-xl object-cover"
            src="https://i.ibb.co/sPWPXB0/login.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
