import React from "react";
import smartWorkplace from "../../../assets/Nimages/Appointment/smartWorkplace.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function SmartWorkplace() {
  return (
    <div className="hero  py-24 px-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse ">
          <div className="px-2  flex-1 flex lg:justify-end  justify-center">
            <LazyLoadImage src={smartWorkplace} effect="opacity" alt="" />
          </div>

          <div className="flex h-100 items-center md:justify-start justify-center flex-1">
            <div className="lg:mt-0 mt-10">
              <h1
                className="font-bold text-[48px] text-[#071635] leading-[60px] pb-4 w-[30rem]"
                style={{ fontFamily: "Noe Display" }}
              >
                Keep your workplace Safe and Smart
              </h1>
              <p className=" text-[#767676] text-[18px]  font-poppins font-normal  w-[30rem]">
                See exactly who’s visiting, when, and why with a visitor
                management system that lets you set your own entry criteria.
                Promote a healthy workplace with a touchless sign-in and
                document verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
