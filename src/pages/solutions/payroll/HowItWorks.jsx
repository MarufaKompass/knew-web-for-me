import React from "react";
import teamKompass from "../../../assets/Nimages/Payroll/teamKompass.png"
export default function HowItWorks() {
  return (
   <div className="">
     <div className="container">
      <div className=" px-6 py-24">


      <div>
            <div className="flex">
              <div className="border-r-2 my-[60px] ">
                <h1
                  className="text-[46px] text-[#191919] font-semibold leading-[55px] my-2 mt-8 w-[32rem]"
                  style={{ fontFamily: "Noe Display" }}
                >
                  Get Your Team   <span className="text-[#2AC8D1]"> Working</span>  With  <span className="text-[#2AC8D1]">Kompass</span>.
                 
         
                </h1>
              </div>
              <div className="flex justify-center items-center h-100 px-[80px]">
                <p className=" text-lg text-paragraph-base text-justify pr-6  font-[350] mt-2 ">
                No more scrambling to find their guests arrive, handwriting name badges, and tracking down signed
                 agreements. Cloud-based solutions will make your life easy . On traveling Check-In system will
                  reduce the Lobby Q. Guest information will help you to manage the service quality. 
                  AI-based solution will help the guests to fill-up the information
                </p>
              </div>
            </div>
          </div>
       <div className="flex justify-center  mt-[30px]">
        <img  src={teamKompass} alt="teamKompass" />
       </div>
      
      </div>
    </div>
   </div>
  );
}
