import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import AppointSlider from "./AppointSlider";
export default function AppointBusiness() {
  return (
<div className="pb-[68px]">
<div className="container">
      <div>
        <div className="lg:flex ">
          <div className="lg:border-r-2 border-r-none lg:my-[60px] my-[20px]">
            <h1
              className="text-[46px] text-[#191919] font-semibold leading-[55px] my-2 mt-8 lg:w-[26rem] w-full xl:pl-[20px] pl-[80px]"
              style={{ fontFamily: "Noe Display" }}
            >
              Appointment <span className="text-[#076F74]">&</span> Business{" "}
              <span className="text-[#076F74]">Meeting</span>
            </h1>
          </div>

          <div className="flex justify-center items-center h-100 px-[80px]  lg:mb-[0px]   mb-[40px] ">
            <p className=" text-lg text-paragraph-base text-justify pr-6  font-[350] ">
              Kompass Connect appointment and visitor management system will
              bring efficiency to your workplace by sending & receiving a
              meeting request, booking a meeting room, allocating resources,
              etc. The brand reputation of any company starts from its reception
              desk, Kompass Connect will convert your reception to a smart
              reception desk.
            </p>
          </div>
        </div>
      </div>

      <AppointSlider></AppointSlider>
    </div>
</div>
  );
}
