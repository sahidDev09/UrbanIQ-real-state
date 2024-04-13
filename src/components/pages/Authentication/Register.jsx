import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import "./Login.css";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("hi sahid iam clicked");
  };

  return (
    <div className="lg:px-40 md:px-10 lg:py-8 mainLogin p-2 md:p-0">
      <div className=" bg-slate-200 grid lg:grid-cols-2 rounded-xl">
        <div className=" flex flex-col gap-3 p-10 justify-between">
          <h1 className=" text-3xl font-bold text-center mb-4">
            Create Acccount
          </h1>
          <div className="flex flex-col gap-3">
            <form onSubmit={handleRegister} className="flex flex-col gap-3">
              <label className=" ml-4">Username</label>
              <label className="input flex items-center gap-2 rounded-full h-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" />
              </label>

              <label className=" ml-4">PhotoURL</label>
              <label className="input flex items-center gap-2 rounded-full h-[60px]">
                <MdAddPhotoAlternate className=" text-lg text-gray-500"></MdAddPhotoAlternate>
                <input
                  type="text"
                  className="grow"
                  placeholder="https//:example.jpeg"
                />
              </label>

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
                    placeholder="Set your secret password"
                  />
                </div>
                <IoMdEyeOff className=" text-xl text-gray-600"></IoMdEyeOff>
              </label>

              <input
                type="submit"
                className="grow mt-6 btn btn-success w-full rounded-full text-white"
                value="Register Now"
              />
            </form>
          </div>

          {/* redicret register page */}

          <div className=" flex mx-auto mt-4">
            <h1 className=" flex items-center lg:gap-3 text-sm mx-auto ">
              Already have an account
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
              <Link to="/login">
                <button className=" font-bold text-blue-400">Login</button>
              </Link>
            </h1>
          </div>
        </div>

        {/* image container */}
        <div className="loginsideimg hidden lg:inline md:inline ">
          <img
            className=" w-full h-full rounded-tr-xl rounded-br-xl object-cover object-center"
            src="https://i.ibb.co/DDy7rvk/regi.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
