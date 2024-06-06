import React from "react";
import service from "../../../assets/image/payroll_services.png";
import benefits from "../../../assets/image/benefits.png";
import timer from "../../../assets/image/timer.png";
import hiring from "../../../assets/image/hiring.png";
import innovation from "../../../assets/image/innovation.png";
import reporting from "../../../assets/image/reporting.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Team() {
  return (
    <div className="py-24  bg-[#f8f8f8] px-6">
      <div className=" container text-center ">
        <h1 className="font-medium  text-center  lg:text-xl text-heading-md  text-custom-base-head leading-[42px] lg:leading-[55px] pb-4">
          Manage your growing
          team, <br></br>all in one place.
        </h1>
        <p className="lg:text-lg text-base font-[350] text-center text-paragraph-base mb-4">
          Behind every successful business is a thriving team. Hire, pay,
          insure, and <br></br>support your employees with Kompass all-in-one people
          platform.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 justify-center mt-12">
            <div className="h-48 w-full 2 border rounded-md bg-[#fff] ">
                <div className="flex justify-center items-center mt-7">
                <LazyLoadImage    effect="opacity" src={service} alt="" className="h-14 w-14" />
                </div>
                 <h3 className=" text-lg font-medium text-[#2f2e2e] mt-3">Full-service<br></br>payroll</h3>
            </div>
            <div className="h-48 w-full border rounded-md bg-[#fff] ">
                <div className="flex justify-center items-center mt-7">
                <LazyLoadImage    effect="opacity" src={benefits} alt="" className="h-14 w-14"  />
                </div>
                 <h3 className=" text-lg font-medium text-[#2f2e2e] mt-3">Employee <br></br>benefits</h3>
            </div>
            <div className="h-48 w-full border rounded-md bg-[#fff] ">
                <div className="flex justify-center items-center mt-7">
                <LazyLoadImage    effect="opacity" src={timer} alt="" className="h-14 w-14"  />
                </div>
                 <h3 className=" text-lg font-medium text-[#2f2e2e] mt-3 ">Time and <br></br> attendance</h3>
            </div>
            <div className="h-48 w-full border rounded-md bg-[#fff] ">
                <div className="flex justify-center items-center mt-7">
                <LazyLoadImage    effect="opacity" src={hiring} alt=""  className="h-14 w-14" />
                </div>
                 <h3 className=" text-lg font-medium text-[#2f2e2e] mt-3">Hiring and <br></br>onboarding</h3>
            </div>
            <div className="h-48 w-full border rounded-md bg-[#fff] ">
                <div className="flex justify-center items-center mt-7">
                <LazyLoadImage    effect="opacity" src={innovation} alt=""  className="h-14 w-14"  />
                </div>
                 <h3 className=" text-lg font-medium text-[#2f2e2e] mt-3">Talent <br></br> management</h3>
            </div>
            <div className="h-48 w-full  border rounded-md bg-[#fff] ">
                <div className="flex justify-center items-center mt-7">
                <LazyLoadImage    effect="opacity" src={reporting} alt=""  className="h-14 w-14"  />
                </div>
                 <h3 className=" text-lg font-medium text-[#2f2e2e] mt-3">Insights and <br></br> reporting</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
