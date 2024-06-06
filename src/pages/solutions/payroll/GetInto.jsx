import React from "react";
import getInto from "../../../assets/Nimages/Payroll/getInto.png";
import payrollRoundGet from "../../../assets/Nimages/Payroll/payrollRoundGet.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function GetInto() {
  return (
    <div>
      <div>
        <div className=" py-24">
          <div className="">
            <div className="flex flex-col lg:flex-row-reverse ">
              <div className="flex-1  flex lg:justify-start  justify-center">
                <LazyLoadImage src={getInto} effect="opacity" alt="" />
              </div>
              <div
                className=""
                style={{ background: `url(${payrollRoundGet}) no-repeat ` }}
              >
                <div className="flex h-100 items-center justify-center flex-1 pl-[130px] pt-[200px]">
                  <div className=" lg:mt-0 mt-10">
                    <h1
                      className="font-medium text-left text-[66px] text-[#242424] leading-[75px] pb-4 w-[30rem]"
                      style={{ fontFamily: "Noe Display" }}
                    >
                      Want To Get Into The <span>Details</span>?
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
