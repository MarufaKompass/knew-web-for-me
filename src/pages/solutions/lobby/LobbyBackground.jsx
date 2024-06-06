import React from "react";
import lobbyBg from "../../../assets/Nimages/Lobby/lobbyBg.png";
import { Link } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function LobbyBackground() {
  return (
    <div className="">
      <div className="bg-[#0C1E21]">
        <div className="">
          <div className="">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center">
              <div className="flex h-100 items-center justify-center ">
                <div className="ml-0 lg:mr-16 text-center lg:text-left">
                <div
                className="border w-36	rounded-[6px] flex justify-center bg-white bg-opacity-5"
                Style="border-color: rgba(255, 255, 255, 0.12)"
              >
                <p className="font-roboto-mono font-mono text-[#ffff]">
                  FOR BUSINESSES
                </p>
              </div>
                  <h1 className="text-[#fff] text-[48px] font-regular w-[30rem] leading-[50px] pt-[30px]"  style={{ fontFamily: "Noe Display" }}>
                  <span className="text-[#2AC8D1]">Lobby</span> that’s easy to use 
                  and <span className="text-[#2AC8D1]">seriously</span> smart.
                  </h1>
                  <p className="font-poppins font-normal  text-[16px] text-[#fff] pt-[20px] w-[28rem] text-justify "  >
                  Kompass  SMART Lobby management will reduce the checkin process time of their  clients. A tired client can easily complete his/her checkin during the  journey time. The house keeping department will be informed well ahead  of time for the arrangements.
                  </p>
                  <Link to="/pricing">
                    <button className=" btn bg-[#11989F] rounded-[24px] text-[11.42px] font-poppins font-bold h-[24px]  w-[160px] text-white    right-[69px] hover:bg-[#159ea5] mt-5">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
             <div>
             <div className="flex justify-end">
                <img  src={lobbyBg} alt="lobbyBg"/>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
