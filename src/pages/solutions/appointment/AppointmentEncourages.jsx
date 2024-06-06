import React from "react";
import shape from "../../../assets/Nimages/Appointment/shape.png";
import shape1 from "../../../assets/Nimages/Appointment/shape1.png";
import appLogo from "../../../assets/Nimages/Appointment/appLogo.png";
export default function AppointmentEncourages() {
  return (
    <div className="container">
      <div className="h-[229px] bg-[#0C1E21] px-2 lg:px-0 relative rounded-[10px]">
        <div
          className="w-[251px] h-[251px] absolute top-0 rounded-[10px]"
          style={{
            backgroundImage: `url(${shape})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[251px] h-[251px] absolute right-[-7.2rem] bottom-[-110px] rounded-[10px]"
          style={{
            backgroundImage: `url(${shape1})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[225px] h-[229px] absolute left-[41.8rem] bottom-[0px] rounded-[10px] "
          style={{
            backgroundImage: `url(${appLogo})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="text-center flex justify-center items-center h-[229px] ">
          <h1 className="text-[20px] font-poppins font-medium  text-white lg:leading-[30px] uppercase">
            Kompass encourages the organization citizenship among the employees.
            A good <br></br>communication will increase the productivity at the
            organization.
          </h1>
        </div>
      </div>
    </div>
  );
}
// style={{ backgroundImage: `url(${appointment})` }}
