/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";

const SingleSlider = ({ image, title, message }) => {
  return (
    <div
      className="w-full md:h-[650px] h-[400px] rounded-md overflow-hidden flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}>
      <div className="bg-gradient-to-l from-transparent to-black/80 w-full min-h-screen flex items-center">
        <div className="relative z-30 w-[60%] flex flex-col gap-3 items-start p-10">
          <h1 className="text-6xl font-semibold text-white">{title}</h1>
          <p className="text-gray-300 w-[80%]">{message}</p>
          <div className="w-[60%] bg-white flex items-center justify-between rounded-md">
            <input
              className="w-[70%] py-3 focus:outline-none ml-4"
              type="text"
              placeholder="Search here..."
            />
            <button className="bg-blue-600 w-14 h-12 text-white text-2xl flex justify-center items-center rounded-md m-2">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
