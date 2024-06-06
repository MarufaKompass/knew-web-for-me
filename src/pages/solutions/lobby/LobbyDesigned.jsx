import React from "react";
import lobbyDesigned from "../../../assets/Nimages/Lobby/lobbyDesigned.png";
// import lobbyDsignedRound from "../../../assets/Nimages/Lobby/lobbyDsignedRound.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function LobbyDesigned() {
  return (
    <div>
      <div className=" py-24 px-6 ">
        <div className="">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex-1  flex  justify-center">
              <LazyLoadImage
                src={lobbyDesigned}
                effect="blur"
                alt=""
                className="h-full w-fit-content"
              />
            </div>

            <div className="flex h-100 items-center justify-start  bg-[#F8F8F8] rounded-l-[10px] flex-1">
              <div className="relative">
                <div className="p-[20px] ">
                  <h1
                    className="font-bold text-[48px]  text-[#242424] leading-[55px] pb-4 w-[40rem]"
                    style={{ fontFamily: "Noe Display" }}
                  >
                    Kompass Lobby{" "}
                    <span className="text-[#11989F]">Management</span> is{" "}
                    <span className="text-[#11989F]">Designed</span> for You.
                  </h1>

                  <p className="text-[18px] font-regular  text-[#767676] w-[40rem]">
                    See exactly who’s visiting, when, and why with a visitor
                    management system that lets you set your own entry criteria.
                    Promote a healthy workplace with a touchless sign- in and
                    document verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
