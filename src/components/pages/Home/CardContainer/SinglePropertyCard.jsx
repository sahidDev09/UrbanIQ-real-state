/* eslint-disable react/prop-types */
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const SinglePropertyCard = ({ properties }) => {
  const {
    image,
    title,
    price,
    facilities,
    location,
    area,
    description,
    segment,
    status,
  } = properties;

  return (
    <div className=" grid grid-cols-3 bg-slate-200 p-6 rounded-xl gap-4">
      {/* card image */}
      <div>
        <img
          className=" min-h-full object-cover rounded-xl"
          src={image}
          alt=""
        />
      </div>

      {/* card details */}

      <div className=" col-span-2 flex flex-col gap-3">
        {/* sagment */}
        <div className=" flex items-center justify-between">
          <button className=" p-2 text-sm text-green-900 px-2 rounded-full bg-green-200">
            #{segment}
          </button>
          <button className="p-2 text-sm text-green-900 px-2 rounded-md bg-blue-100">
            {status}
          </button>
        </div>
        {/* title and description*/}
        <h1 className=" text-md font-semibold">{title}</h1>
        <p className=" text-sm text-gray-600">{description.slice(0, 50)}...</p>
        {/* location, area and price */}

        <div className="justify-between text-sm bg-gray-50 p-2 rounded-xl hidden md:inline-flex">
          <div className="area flex items-center gap-2">
            <div className=" p-2 bg-slate-200 text-xl rounded-md">
              <LiaExternalLinkSquareAltSolid></LiaExternalLinkSquareAltSolid>
            </div>
            <p className=" text-yellow-500">{area}</p>
          </div>

          <div className="location flex items-center gap-2">
            <div className=" p-2 bg-slate-200 text-xl rounded-md">
              <FaMapLocationDot></FaMapLocationDot>
            </div>
            <p>{location}</p>
          </div>
          <div className="price flex items-center gap-2">
            <div className=" p-2 bg-slate-200 text-xl rounded-md">
              <GiPriceTag></GiPriceTag>
            </div>
            <p className=" text-green-600">{price}</p>
          </div>
        </div>

        {/* facilites and button */}

        <div className=" flex justify-between items-center">
          <div className="facilites items-center gap-4 hidden md:inline-flex">
            {facilities.map((faci, index) => (
              <div
                key={index}
                className=" flex items-center gap-2 text-sm text-gray-600">
                <FaHeart className=" text-2xl"></FaHeart>
                <p>{faci}</p>
              </div>
            ))}
          </div>
          <button className=" p-4 btn btn-success text-white">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyCard;
