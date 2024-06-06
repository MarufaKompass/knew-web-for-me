import React, { useContext } from "react";
import partners1 from "../../assets/Nimages/Home/yaqeen.png";
import partners2 from "../../assets/Nimages/Home/dana.png";
import partners3 from "../../assets/Nimages/Home/softcell.png";
import partners4 from "../../assets/Nimages/Home/macDry.png";
import partners6 from "../../assets/Nimages/Home/safety.png";
import partners7 from "../../assets/Nimages/Home/building.png";
import partners5 from "../../assets/Nimages/Home/james-Group.png";
import { PricingContext } from "../../context/PricingProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Scrollbar, Autoplay } from "swiper";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./styles.css";
export default function Partners() {
  const { partners } = useContext(PricingContext);
  const images = [partners1, partners2, partners3, partners4, partners5, partners6, partners7];
  return (
    <div className="bg-[#F4F8F8] ">
      <div className=" container py-[48px] h-auto">
        <div className="flex justify-center" ref={partners}>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Scrollbar, Autoplay]}
            autoplay={true}
            breakpoints={{
              // when window width is >= 640px
              320: {
                width: 320,
                slidesPerView: 1,
                spaceBetween: 10,
              },
              400: {
                width: 400,
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                width: 640,
                slidesPerView: 3,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1100: {
                width: 1100,
                slidesPerView: 5,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              1650: {
                width: 1650,
                slidesPerView: 6,
                spaceBetween: 120,
              },
            }}
            className="mySwiper"
          >
           
               {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-16">
                  <LazyLoadImage effect="opacity" src={image} alt={`pic-${index}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div></div>
        </div>
      </div>
    </div>
  );
}
