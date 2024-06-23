import React from "react";
import bgKompass from "../../assets/Nimages/Home/bg-images-2.png";
import appStore from "../../assets/Nimages/Home/appStore.png";
import googlePlay from "../../assets/Nimages/Home/googlePlay.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

const text = {
  heading:
    "  text-[30px]  md:text-[50px]  font-regular text-[#fff]   md:leading-[60px] leading-[40px]	 drop-shadow-xl  md:w-[475px] w-full",
  size: "md:text-[16px] text-[13px]  font-[390] text-[#fff] font-poppins md:w-[480px] w-full",
};
export default function Background() {
  return (
    <div className=" bg-[#0c1e21] ">
      <div className="">
        <div className="flex flex-col lg:flex-row-reverse gap-4">
          <div className="flex-1  lg:justify-end lg:flex  hidden">
            <motion.img
              src={bgKompass}
              effect="opacity"
              alt=""
              className="h-full w-fit-content"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: [0, 0.71, 0.2, 1.5],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            />
          </div>

          <div className="flex h-100 items-center  flex-1   px-[20px]  md:pl-[65px]  lg:pl-[50px] xl:pl-[200px]">
            <div className="pt-[120px]  lg:pt-[40px] xl:pt-[0px]">
              <div
                className="border w-36	rounded-[6px] flex justify-center bg-white bg-opacity-5 mb-[42px]"
                Style="border-color: rgba(255, 255, 255, 0.12)"
              >
                <p className="font-roboto-mono font-mono text-[#ffff] ">
                  FOR BUSINESSES
                </p>
              </div>

              <h1
                className={text.heading}
                style={{ fontFamily: "Noe Display" }}
              >
                Kompass App Will ease your daily life activities
              </h1>

              <div className="md:pt-[42px] pt-[20px]">
                <p className={text.size}>
                  Kompass Connect is an appointment and visitor management
                  solution integrated with payroll & HR, which will make your
                  daily life ease and efficient.
                </p>
              </div>
              <div className="pt-[32px] lg:mb-0 mb-6 flex  justify-start ">
                <div className="lg:mr-4 mr-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hellokompass.connect&pli=1"
                    target="_blank"
                  >
                    <button
                      aria-label="Name"
                      title="Title"
                      className="  sm:w-auto sm:h-auto w-[140px] h-[60px]"
                    >
                      <LazyLoadImage effect="opacity" src={googlePlay} alt="" />
                    </button>
                  </a>
                </div>
                <div className="lg:mr-4 mr-2">
                  <a
                    href="https://apps.apple.com/app/kompass-connect/id6449901732?platform=iphone"
                    target="_blank"
                  >
                    <button
                      aria-label="Name"
                      title="Title"
                      className="  sm:w-auto sm:h-auto w-[140px] h-[60px]"
                    >
                      <LazyLoadImage effect="opacity" src={appStore} alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
