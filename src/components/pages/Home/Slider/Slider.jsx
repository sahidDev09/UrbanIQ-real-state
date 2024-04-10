import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SingleSlider from "./SingleSlider";
import slider1 from "../../../../assets/sliderimg1.jpg";
import slider2 from "../../../../assets/sliderimg2.jpg";
import slider3 from "../../../../assets/sliderimg3.jpg";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      className=" mt-8"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
      <SwiperSlide>
        <SingleSlider
          image={slider1}
          title="Find Your Sanctuary with Our Expert Guidance and Support."
          message="Search confidently with your trusted source of office building for buy, sell, or rent at a reasonable price"></SingleSlider>
      </SwiperSlide>
      <SwiperSlide>
        <SingleSlider
          image={slider2}
          title="Your Dream Home Awaits! Let's Begin Your Journey."
          message="Search confidently with your trusted source of office building for buy, sell, or rent at a reasonable price"></SingleSlider>
      </SwiperSlide>
      <SwiperSlide>
        <SingleSlider
          image={slider3}
          title="Unlock the Door to Your Next Adventure - Start Here."
          message="Search confidently with your trusted source of office building for buy, sell, or rent at a reasonable price"></SingleSlider>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
