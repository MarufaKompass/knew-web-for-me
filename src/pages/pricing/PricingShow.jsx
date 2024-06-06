import React, { useContext } from "react";
import ConfirmModal from "./ConfirmModal";
import PricingCard from "./PricingCard";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import pricingShow from "../../assets/image/pricingShow.png";
import CustomizeOffer from "../home/customizeOffer/CustomizeOffer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Scrollbar } from "swiper";
import "./styles.css";
import "swiper/css/navigation";
import TrailArrow from "../../common/components/svg/store/TrailArrow";
import { PricingContext } from "../../context/PricingProvider";
const PricingShow = ({ pricingData, changeToggle, setChangeToggle }) => {

  const { customizeModal, setCustomizeModal,modalVisible, setModalVisible } = useContext(PricingContext);
  let [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);
  return (
    <>
      <section className="mt-10">
        {/* <div className="flex justify-center mb-20">
          <div>
            <label className="text-tiny text-paragraph-base font-[350] ">
              Monthly
            </label>
          </div>
          <input
            type="checkbox"
            className="toggle mx-2 toggle-primary"
            checked={changeToggle}
            onChange={() => setChangeToggle(!changeToggle)}
          />

          <div>
            <label className="text-tiny text-paragraph-base font-[350]">
              Annually
            </label>
          </div>
        </div> */}

 <div className="flex justify-center mb-20">
 <button
        className={`w-[111px] h-[44px] bg-[${changeToggle ? 'gray' : '#076F74'}] flex justify-center items-center rounded-[22px] cursor-pointer`}
        onClick={() => setChangeToggle(false)}
      >
        <label  className={`text-[14px] ${changeToggle ? 'text-[#404040]' : 'text-[#FFFFFF]'} font-poppins font-regular  cursor-pointer`}>
          Monthly
        </label>
</button>

      <button
        className={`w-[111px] h-[44px] bg-[${changeToggle ? '#076F74' : 'gray'}] flex justify-center items-center rounded-[22px] cursor-pointer`}
        onClick={() => setChangeToggle(true)}
      >
        <label className={`text-[14px] ${changeToggle ? 'text-[#FFFFFF]' : 'text-[#404040]'} font-poppins font-regular  cursor-pointer`}>
          Yearly
        </label>
      </button>

     
    </div>






        <div>
          {pricingData === null ? (
            <div>
              <LazyLoadImage effect="opacity" src={pricingShow} alt="" />
            </div>
          ) : (
            <div>
              {spinner ? (
                <div className="flex justify-center items-center h-96">
                  <DotLoader
                    justify="center"
                    color={"#12a9b2"}
                    loading={spinner}
                  />
                </div>
              ) : (
                <Swiper
                  navigation={true}
                  scrollbar={{
                    hide: true,
                  }}
                  modules={[Navigation, Scrollbar]}
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1100: {
                      width: 1100,
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    1550: {
                      width: 1550,
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  // modules={[Pagination]}
                  className="mySwiper"
                >
                  <div className="container">
                  <div className="w-full relative">
                    {pricingData.map((pricingItem, index) => (
                      <SwiperSlide>
                        <PricingCard
                          setModalVisible={setModalVisible}
                          pricingItem={pricingItem}
                          key={index}
                          changeToggle={changeToggle}
                          setChangeToggle={setChangeToggle}
                        ></PricingCard>
                      </SwiperSlide>
                    ))}
                  </div>
                  </div>
                </Swiper>
              )}
            </div>
          )}
        </div>
      </section>
      {modalVisible ? <ConfirmModal setModalVisible={setModalVisible} /> : null}

      <div className="flex justify-center mt-10 ">
        <label
          htmlFor="customize-modal"
          className="btn  bg-[#076F74] rounded-[30px]  px-[60px]  hover:bg-[#076F74]  "
        >
          {" "}
          <span className="mr-[8px] text-[#fff] font-poppins text-[14px] font-medium ">
            {" "}
            Customize Your Offer 
          </span>
          <TrailArrow></TrailArrow>
        </label>
      </div>

      <div>
        {customizeModal ? (
          <CustomizeOffer setCustomizeModal={setCustomizeModal} />
        ) : null}
      </div>
    </>
  );
};

export default PricingShow;
