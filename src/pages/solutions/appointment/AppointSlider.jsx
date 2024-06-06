import React from "react";
import brainstorming from "../../../assets/Nimages/Appointment/brainstorming.png";
import counselling from "../../../assets/Nimages/Appointment/counselling.png";
import businessMeeting from "../../../assets/Nimages/Appointment/businessMeeting.png";
import planingMeeting from "../../../assets/Nimages/Appointment/planingMeeting.png";
import departmental from "../../../assets/Nimages/Appointment/departmental.png";
export default function AppointSlider() {
  return (
    <div className="px-[80px]">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30">
          <img src={counselling} alt="counselling" />
          <div className="absolute bottom-[2rem] left-[4rem]">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Counselling
            </h2>
          </div>
        </div>
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30">
          <img src={brainstorming} alt="brainstorming" />
          <div className="absolute bottom-[2rem] left-[3.2rem]">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Brainstorming
            </h2>
          </div>
        </div>
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30">
          <img src={businessMeeting} alt="businessMeeting" />
          <div className="absolute bottom-[2rem] left-[2rem]">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Business Meeting
            </h2>
          </div>
        </div>
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30">
          <img src={planingMeeting} alt="planingMeeting" />
          <div className="absolute bottom-[2rem] left-[3rem]">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Planing Meeting
            </h2>
          </div>
        </div>
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30">
          <img src={departmental} alt="departmental"   />
          <div className="absolute bottom-[2rem] left-[4rem]">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Departmental
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
