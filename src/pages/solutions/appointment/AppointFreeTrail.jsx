import React from "react";
import freeTrail from "../../../assets/Nimages/Appointment/freeTrail.png";
import 'react-lazy-load-image-component/src/effects/blur.css';
const AppointFreeTrail = () => {
  return (
    <div className="flex justify-center">
    <div
      className=" w-[950px] "
      style={{ background: `url(${freeTrail}) no-repeat center/cover` }}
    >
      <div className="py-24">
        <div className="">
          <div className=" ">
            <div className="text-center">
              <div className="">
                <div className="flex justify-center">
                  <div>
                    <h1
                      className="text-[46px] font-semibold text-[#343434] "
                      style={{ fontFamily: "Noe Display" }}
                    >
                      Interested for a <span className="text-[#076F74]">free</span> trail?
                    </h1>
                    <p className="py-4 text-[#999999] font-poppins text-[16px] font-regular text-center w-[36rem]">
                    See exactly who’s visiting, when, and why with a <br></br>
                    visitor management system
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AppointFreeTrail;
