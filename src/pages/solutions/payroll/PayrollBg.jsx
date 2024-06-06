import React from "react";
import payrollBg from "../../../assets/Nimages/Payroll/payrollBg.png";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import AllBusiness from "./AllBusiness";

export default function PayrollBg() {
  return (
    <div className="">
      <div className="bg-[#0C1E21]">
        <div className="container">
          <div className="pt-[160px]">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center">
              <div className="flex h-100 items-center  ">
                <div className="ml-0 lg:mr-16 text-center lg:text-left">
                  <div
                    className="border w-36	rounded-[6px] flex justify-center bg-white bg-opacity-5"
                    Style="border-color: rgba(255, 255, 255, 0.12)"
                  >
                    <p className="font-roboto-mono font-mono text-[#ffff]">
                      FOR BUSINESSES
                    </p>
                  </div>
                  <h1
                    className="text-[#fff] text-[48px] font-regular w-[35rem] leading-[60px] pt-[30px]"
                    style={{ fontFamily: "Noe Display" }}
                  >
                    Flexible <span className="text-[#2AC8D1]">payroll</span>,
                    HR, and more At{" "}
                    <span className="text-[#2AC8D1]">One Place</span>.
                  </h1>
                  <p className="font-poppins font-normal  text-[16px] text-[#fff] pt-[20px] w-[28rem] text-justify ">
                    Kompass Teams is a dynamic solution that will help an
                    organization create, manage and monitor payroll activities
                    in a smart way. Easy employee onboarding, on-demand
                    certificates, and many more.
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
                  <img src={payrollBg} alt="payrollBg" />
                </div>
              </div>
            </div>
          </div>
        </div>
     <div className="container">
     <div>
          <AllBusiness></AllBusiness>
        </div>
     </div>
      </div>
    </div>
  );
}
