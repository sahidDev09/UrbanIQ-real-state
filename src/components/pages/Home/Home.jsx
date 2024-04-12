import { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import SinglePropertyCard from "./CardContainer/SinglePropertyCard";
import TrustedCompany from "./TrustedCo/TrustedCompany";
import Contact from "./Contact/Contact";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/property.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className=" p-2 md:p-3 lg:p-0">
      <Slider></Slider>
      <h1 className="md:text-4xl text-3xl text-center font-semibold mt-8">
        Our Properties
      </h1>
      <p className=" text-sm md:text-md text-center my-5 ">
        Step into a realm of exceptional properties where every corner holds a
        story waiting to be told. Begin your journey here
      </p>
      <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-4 ">
        {properties.map((property, index) => (
          <SinglePropertyCard
            key={index}
            properties={property}></SinglePropertyCard>
        ))}
      </div>

      <TrustedCompany></TrustedCompany>
      <Contact></Contact>
    </div>
  );
};

export default Home;
