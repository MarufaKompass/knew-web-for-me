import React from "react";

import 'react-lazy-load-image-component/src/effects/blur.css';
import ManagementDropdown from "./ManagementDropdown";
export default function HowItWork() {
  return (
    <div className="container">
      <div className="px-6 pb-[100px] relative">
        <div className="xl:w-[65rem] lg:w-[45rem] w-full ">
          <h1 className="text-[48px]  font-semibold text-[#242424] leading-[55px] pt-6 " style={{ fontFamily: "Noe Display" }}>
            How Our Visitor <span className="text-[#076F74]">Management</span> System <span className="text-[#076F74]">Works</span>
          </h1>
          <p className="pt-4 text-[#949494] text-[18px] font-poppins  font-normal ">
            As a host you can send an invitation for a meeting or voice with
            date and time. who are the guest,how many are joining.Does he/she
            needs to arrange a facility and many more...
          </p>
        </div>



        <div >
          <ManagementDropdown></ManagementDropdown>
         
        </div>
      </div>
    </div>
  );
}
