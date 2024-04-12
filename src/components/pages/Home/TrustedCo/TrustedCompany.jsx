import Marquee from "react-fast-marquee";
import company1 from "../../../../assets/Company/Amazon pay.png";
import company2 from "../../../../assets/Company/Apple logo.png";
import company3 from "../../../../assets/Company/Ebay.png";
import company4 from "../../../../assets/Company/Google.png";
import company5 from "../../../../assets/Company/Microsoft.png";
import company6 from "../../../../assets/Company/Samsung.png";
import company7 from "../../../../assets/Company/Walmart.png";

const TrustedCompany = () => {
  return (
    <div>
      <h1 className="md:text-4xl text-3xl text-center font-semibold mt-8">
        Trusted Company
      </h1>
      <p className=" lg:w-[60%] text-center mx-auto my-4 text-gray-500">
        Our Trusted Network: We have partnered with industry leaders known for
        their integrity and excellence, providing you with peace of mind.
      </p>

      <Marquee pauseOnHover className="my-10 py-5">
        <div className=" flex items-center gap-10">
          <img className=" w-20" src={company1} alt="" />
          <img className=" w-20" src={company2} alt="" />
          <img className=" w-20" src={company3} alt="" />
          <img className=" w-20" src={company5} alt="" />
          <img className=" w-20" src={company4} alt="" />
          <img className=" w-20" src={company5} alt="" />
          <img className=" w-20" src={company3} alt="" />
          <img className=" w-20" src={company6} alt="" />
          <img className=" w-20" src={company7} alt="" />
          <img className=" w-20" src={company4} alt="" />
          <img className=" w-20" src={company1} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedCompany;
