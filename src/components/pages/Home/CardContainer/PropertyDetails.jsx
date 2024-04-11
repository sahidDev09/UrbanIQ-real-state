import { Link, useLoaderData, useParams } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbFileDescription } from "react-icons/tb";
import { GrStatusWarning } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";

const PropertyDetails = () => {
  const properties = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const property = properties.find((p) => p.id === idInt);

  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-5">
        {/* images and long descriptions */}
        <div>
          <h1 className=" text-3xl font-bold my-5">{property.title}</h1>
          <img
            className=" rounded-md h-[400px] w-full"
            src={property.image}
            alt=""
          />
          <p className=" text-sm text-gray-600 my-4">
            <span className=" font-bold">Full description:</span>{" "}
            {property.long_description}
          </p>
        </div>
        {/* All details */}
        <div className=" p-6 border bg-slate-200 h-[80%] my-auto flex flex-col gap-4 justify-left rounded-md">
          <h1 className="text-xl ">Full Details</h1>
          <hr />
          <div className=" flex flex-col gap-3">
            <div className="Sagment flex gap-4 items-center">
              <div className="rounded-md bg-white flex justify-center items-center text-xl">
                <BiSolidCategoryAlt className="h-10 w-10 text-sm p-2 text-yellow-600"></BiSolidCategoryAlt>
              </div>
              <h1 className="flex gap-2">
                <span className=" font-bold">Sagment: </span>
                {property.segment}
              </h1>
            </div>

            <div className="des flex gap-4 items-center">
              <div className="rounded-md bg-white flex justify-center items-center text-xl">
                <TbFileDescription className="h-10 w-10 text-sm p-2"></TbFileDescription>
              </div>
              <h1>
                <span className=" font-bold">Description: </span>
                {property.description}
              </h1>
            </div>

            <div className="status flex gap-4 items-center">
              <div className="rounded-md bg-white flex justify-center items-center text-xl">
                <GrStatusWarning className="h-10 w-10 text-sm p-2 text-warning"></GrStatusWarning>
              </div>
              <h1 className=" font-bold flex gap-2">
                Status :
                <span className=" font-normal text-green-600">
                  {property.status}
                </span>
              </h1>
            </div>

            <div className="facility flex gap-4 items-center">
              <div className="rounded-md bg-white flex justify-center items-center text-xl">
                <FaHeart className="h-10 w-10 text-sm p-2 text-warning"></FaHeart>
              </div>
              <h1 className=" font-bold flex gap-3">
                Facilities :
                {property.facilities.map((facility, index) => (
                  <div key={index}>
                    <span className=" font-normal text-blue-500">
                      #{facility}
                    </span>
                  </div>
                ))}
              </h1>
            </div>

            <div className="area flex gap-4 items-center">
              <div className="rounded-md bg-white flex justify-center items-center text-xl">
                <FaExternalLinkSquareAlt className="h-10 w-10 text-sm p-2 "></FaExternalLinkSquareAlt>
              </div>
              <h1 className=" font-bold flex gap-2">
                Area :
                <span className=" font-normal">
                  {property.area}
                </span>
              </h1>
            </div>

            <div className="location flex gap-4 items-center">
              <div className="rounded-md bg-white flex justify-center items-center text-xl">
                <FaLocationArrow className="h-10 w-10 text-sm p-2 text-red-500"></FaLocationArrow>
              </div>
              <h1 className=" font-bold flex gap-2">
                Location :
                <span className=" font-normal text-red-600">
                  {property.location}
                </span>
              </h1>
            </div>

            <div className="price flex gap-4 items-center">
              <div className="rounded-md bg-white flex justify-center items-center text-xl">
                <IoIosPricetags className="h-10 w-10 text-sm p-2 text-blue-500"></IoIosPricetags>
              </div>
              <h1 className=" font-bold flex gap-2">
                Price :
                <span className=" font-semibold text-blue-600">
                  {property.price}
                </span>
              </h1>
            </div>

            <Link to="/">
              <button className=" btn bg-success text-white">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
