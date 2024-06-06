import React from "react";
import ReceptionistFeatures from "./ReceptionistFeatures";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import receptionist from "../../../assets/Nimages/Lobby/receptionist.png";
export default function Receptionist() {
  return (
    <div className="bg-[#FFFDF6]">
      <div className="hero  pt-24 px-6">
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse">
            <div className="flex-1 flex justify-center ">
              <LazyLoadImage
                src={receptionist}
                alt=""
                className="h-full w-fit-content"
              />
            </div>
            <div className="h-100 flex items-center justify-start flex-1">
              <ReceptionistFeatures></ReceptionistFeatures>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
