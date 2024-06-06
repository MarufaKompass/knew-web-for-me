import React from "react";
import mobileScreen from "../../../assets/Nimages/Lobby/mobileScreen.png";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function LobbyBooking() {
  return (
    <div className="pb-[68px]">
      <div className="container">
        <div>
          <div className="flex">
            <div className="border-r-2 my-[60px] ">
              <h1
                className="text-[46px] text-[#191919] font-semibold leading-[55px] my-2 mt-8 w-[26rem]"
                style={{ fontFamily: "Noe Display" }}
              >
                <span className="text-[#076F74]">Kompass</span> Lobby is
                Designed
                <span className="text-[#076F74]"> For</span> You
              </h1>
            </div>
            <div className="flex justify-center items-center h-100 px-[80px]">
              <p className=" text-lg text-paragraph-base text-justify pr-6  font-[350] mt-2 ">
                No more scrambling to find their guests arrive, handwriting name
                badges, and tracking down signed agreements. Cloud-based
                solutions will make your life easy . On traveling Check-In
                system will reduce the Lobby Q. Guest information will help you
                to manage the service quality. AI-based solution will help the
                guests to fill-up the information
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <img src={mobileScreen} alt="mobileScreen" />
          </div>
        </div>
      </div>
    </div>
  );
}
