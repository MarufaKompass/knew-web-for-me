import React from "react";
import appointmentBg from "../../../assets/Nimages/Appointment/appointmentBg.png";
import { Link } from "react-router-dom";
export default function AppointBg() {
  return (
    <div className="">
      <div className="bg-[#000]">
        <div className="py-[130px]">
          <div className="container">
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 px-6 h-[40rem]  items-center">
              
              <div className="flex h-100 items-center justify-start ">
                <div className="ml-0 lg:mr-16 lg:text-left">
                <div
                className="border w-36	rounded-[6px] flex justify-center bg-white bg-opacity-5"
                Style="border-color: rgba(255, 255, 255, 0.12)"
              >
                <p className="font-roboto-mono font-mono text-[#ffff]">
                  FOR BUSINESSES
                </p>
              </div>
                  <h1
                    className="text-[#fff] text-[39px] font-regular w-[30rem] leading-[50px] pt-[30px] text-left"
                    style={{ fontFamily: "Noe Display" }}
                  >
                    Peace of mind for you and everyone who enters At<br></br>
                    your workplace
                  </h1>
                  <p className="font-poppins font-normal  text-[14px] text-[#fff] pt-[20px] w-[23rem] text-justify ">
                    See exactly who’s visiting, when, and why with a visitor
                    management system that lets you set your own entry criteria.
                    Promote a healthy workplace with a touchless sign-in and
                    document verification.Use everyone's time efficiently.
                  </p>
                  <Link to="/pricing">
                    <button className=" btn bg-[#11989F] rounded-[24px] text-[11.42px] font-poppins font-bold h-[24px]  w-[160px] text-white    right-[69px] hover:bg-[#159ea5] mt-5">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:justify-end md:flex  hidden ">
                <img src={appointmentBg} alt="appointmentBg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// style={{ backgroundImage: `url(${appointment})` }}
 
{/* className="md:w-[30rem]" */}