/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import 'animate.css';

const SingleSlider = ({ image, title, message }) => {
  return (
    <div
      className="w-full md:h-[650px] h-[400px] rounded-md overflow-hidden flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}>
      <div className="bg-gradient-to-l from-transparent to-black/80 w-full min-h-screen flex items-center">
        <div className="md:w-[60%] w-full flex flex-col gap-3 items-start p-10 md:ml-5">
          <h1 className="animate__animated animate__bounceInLeft lg:text-6xl md:text-4xl text-3xl font-semibold text-white">{title}</h1>
          <p className="text-gray-300 md:w-[80%] animate__animated animate__bounceInLeft animate__delay-1s">{message}</p>
          <div className="md:w-[60%] w-full bg-white flex items-center justify-between rounded-md animate__animated animate__fadeInUp">
            <input
              className="md:w-[70%] w-full py-3 focus:outline-none ml-4"
              type="text"
              placeholder="Search here..."
            />
            <button className="bg-green-600 w-14 h-12 text-white text-2xl flex justify-center items-center rounded-md m-2">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
