/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleTeamCard = ({ teams }) => {
  // aos animation

  useEffect(() => {
    Aos.init();
  }, []);

  const { profile_img, name, designation, email } = teams;

  return (
    <div>
      <Helmet>
        <title>UrbanIQ | team</title>
      </Helmet>
      <div
        data-aos="zoom-in-right"
        className=" flex flex-col gap-2 items-center my-8">
        <img
          className=" object-cover w-52 h-52 rounded-full border-2 border-blue-200 p-2"
          src={profile_img}
          alt=""
        />
        <h1 className=" font-bold">{name}</h1>
        <h3 className=" text-yellow-600">{designation}</h3>
        <p className=" text-gray-600 text-sm">{email}</p>
      </div>
    </div>
  );
};

export default SingleTeamCard;
