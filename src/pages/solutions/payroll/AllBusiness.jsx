import React from 'react'
import smallBusiness from "../../../assets/Nimages/Payroll/small.png";
import mediumBusiness from "../../../assets/Nimages/Payroll/medium.png";
import largeBusiness from "../../../assets/Nimages/Payroll/large.png";
export default function AllBusiness() {
  return (
    <div className='grid grid-cols-3 gap-10 pb-[60px] pt-[30px]'> 
     
     <div className="border rounded-[10px]  bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.1)]">
        <div className="flex">
            <div className="flex items-center h-100">
                <img src={smallBusiness} alt="smallBusiness"/>
            </div>
            <div className="flex items-center h-100">
               <div>
               <p className="font-medium text-[24px] text-[#fff]"  style={{ fontFamily: "Noe Display" }}>Small Business</p>
                <p className='font-poppins font-regular text-[14px] text-[#fff] w-[17rem]'>
                Your life will be easy by using Kompass
                Teams & HR for your business.
                </p>
               </div>

            </div>
        </div>
     </div>
     <div className="border rounded-[10px]  bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.1)]">
        <div className="flex">
            <div className="flex items-center h-100">
                <img src={mediumBusiness} alt="mediumBusiness"/>
            </div>
            <div className="flex items-center h-100">
               <div>
               <p className="font-medium text-[24px] text-[#fff]"  style={{ fontFamily: "Noe Display" }}>Small Business</p>
                <p className='font-poppins font-regular text-[14px] text-[#fff] w-[17rem]'>
                Kompass Teams & HR will manage your
                 requirements.
                </p>
               </div>

            </div>
        </div>
     </div>
     <div className="border rounded-[10px]  bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.1)]">
        <div className="flex">
            <div className="flex items-center h-100">
                <img src={largeBusiness} alt="largeBusiness"/>
            </div>
            <div className="flex items-center h-100">
               <div>
               <p className="font-medium text-[24px] text-[#fff]"  style={{ fontFamily: "Noe Display" }}>Small Business</p>
                <p className='font-poppins font-regular text-[14px] text-[#fff] w-[17rem]'>
                Easily setup and configure your 
                organization's Payroll and HR in Kompass. 
                </p>
               </div>

            </div>
        </div>
     </div>
   
    </div>
  )
}
