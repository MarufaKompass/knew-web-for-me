import React from "react";
import accuracy from "../../../assets/Nimages/Payroll/accuracy.png";
import signature from "../../../assets/Nimages/Payroll/signature.png";
import tax from "../../../assets/Nimages/Payroll/tax.png";
import calculation from "../../../assets/Nimages/Payroll/calculation.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Accuracy() {
  return (
    <div className="hero  pb-24 px-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="flex h-100 items-center justify-center flex-1">
            <div className="">
              <h1
                className="font-semibold text-[65px] text-[#191825]  pb-4 leading-[75px]"
                style={{ fontFamily: "Noe Display" }}
              >
                Compliance, Accuracy,And Peace Of Mind.
              </h1>
              <p className="lg:text-left text-lg font-[350]  text-paragraph-base  lg:pl-18 lg:px-0 md:px-28 px-0">
                <div className="flex  mt-[60px] hover:border w-[32rem] px-[15px] py-[20px] rounded-[32px]">
                  <div>
                    <img src={signature} alt="signature" />
                  </div>
                  <div className="mb-4 flex items-center h-100 pl-[20px]">
                    <div>
                      <h3 className="text-[18px] font-medium text-[#191825] ">
                        No forgotten forms or signatures.
                      </h3>
                      <p className=" text-[16px] font-poppins font-[350]  text-[#4F6169] w-[23rem]">
                        All process and application are online.Employee can
                        enjoy full freedom in completing his/her HR activities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex mt-[30px] border w-[32rem] px-[15px] py-[20px]  rounded-[32px]">
                  <div>
                    <img src={tax} alt="tax" />
                  </div>
                  <div className="flex items-center h-100 pl-[20px] ">
                    <div>
                      <h3 className="text-[18px] font-medium text-[#191825] ">
                        State tax Customize tax Configuration.
                      </h3>
                      <p className="text-[16px] font-poppins font-[350]  text-[#4F6169] w-[23rem]">
                        We handle the registration process in all the states
                        your employees live and work.
                      </p>
                    </div>
                  </div>
                </div>

               
                <div  className="flex mt-[30px] hover:border w-[32rem] px-[15px] py-[20px]  rounded-[32px]">
                  <div className="flex justify-center items-center h-100">
                    <img src={calculation} alt="calculation" />
                  </div>
                  <div className=" flex items-center pl-[20px]">
                    <div>
                      <h3 className="text-[18px] font-medium text-[#191825] ">
                        Auto-calculations for fewer mistakes.
                      </h3>
                      <p className="text-[16px] font-poppins font-[350]  text-[#4F6169] w-[23rem]">
                        We keep track of changing tax laws and do the
                        calculations for you.
                      </p>
                    </div>
                  </div>
                </div>
              
              </p>
            </div>
          </div>

          <div className="flex-1  flex justify-center">
            <LazyLoadImage src={accuracy} effect="opacity" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
