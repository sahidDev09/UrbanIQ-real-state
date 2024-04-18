import { Helmet } from "react-helmet-async";
import lottieHouse from "../../../assets/houseAnim.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="lg:m-10 grid md:grid-cols-1 lg:grid-cols-2 items-center gap-4 m-2 md:m-0">
      <Helmet>
            <title>UrbanIQ | about</title>
        </Helmet>
      <div className=" flex flex-col gap-4">
        <h1 className="lg:text-4xl md:2xl text-xl font-bold">
          Discovering Opportunities: Our Commercial Real Estate Journey
        </h1>

        <h3 className="md:text-xl font-semibold">Why choose Us ? </h3>
        <div>
          <ul className="list-disc ml-8">
            <li>Expertise</li>
            <li>Client-Centric Focus</li>
            <li>Proven Track Record</li>
            <li>Innovative Solutions</li>
            <li>Long-Term Partnerships</li>
          </ul>
        </div>

        <h1 className="text-xl font-semibold text-red-400">Our Story : </h1>
        <p className=" text-sm md:text-xl text-gray-500">
          Founded with a vision to redefine the standards of excellence in the
          commercial real estate sector, [Your Company Name] has emerged as a
          trusted name synonymous with professionalism, integrity, and results.
          What began as a passion for real estate has evolved into a thriving
          enterprise dedicated to helping clients achieve their commercial
          property goals. Our journey is built on a foundation of hard work,
          dedication, and unwavering commitment to client satisfaction. Over the
          years, we&apos;ve built a reputation for excellence, earning the trust
          and loyalty of clients across [Your Location] and beyond. From small
          businesses to multinational corporations, we&apos;ve had the privilege
          of serving a diverse clientele, each with their own unique set of
          needs and aspirations. As we continue to grow and evolve, our core
          values remain unchanged. We are driven by a relentless pursuit of
          excellence, a passion for innovation, and a genuine desire to make a
          positive impact in the communities we serve. Whether you&apos;re a
          seasoned investor, a first-time buyer, or a business owner looking to
          lease commercial space, we invite you to join us on this exciting
          journey towards success.
        </p>
      </div>

      <div>
        <Lottie animationData={lottieHouse}></Lottie>
      </div>
    </div>
  );
};

export default About;
