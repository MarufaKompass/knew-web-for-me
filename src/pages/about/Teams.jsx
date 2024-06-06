import React from "react";
import Facebook from "../../common/components/svg/socialIcon/Facebook";
import Linkedin from "../../common/components/svg/socialIcon/Linkedin";
import Twitter from "../../common/components/svg/socialIcon/Twitter";
import backgroundOne from "../../assets/Nimages/About/lbg-1.png";
import backgroundTwo from "../../assets/Nimages/About/lbg-2.png";
import backgroundThree from "../../assets/Nimages/About/lbg-3.png";
import leaderBg from "../../assets/Nimages/About/leaderBg.png";

const teams = {
  teamHeading: "text-[20px] text-[#0C1E21] font-medium pt-[12px]  font-poppins",
  coHeading: "text-[16px] text-[#6b7280] font-medium font-poppins",
  title: "text-[16px]  text-[#6b7280] font-poppins  font-regular pt-[8px]",

  paddingBox: "p-[16px] text-center",

  // images: "flex justify-center",
  box:"flex justify-center"
};

const teamMembersData = [
  {
    name: "AKM Ahsanul Hoque",
    role: "Co-founder & COO",
    backgroundImage: backgroundOne,
    bgImages: " w-[338px] h-[236px]",
  },
  {
    name: "Nousheen Tahsina Hassan",
    role: "Co-founder & CEO",
    backgroundImage: backgroundTwo,
    bgImages: " w-[310px] h-[240px]",
  },
  {
    name: "Partha Saha",
    role: "Co-founder & CTO",
    backgroundImage: backgroundThree,
    bgImages: " w-[338px] h-[228px]",
  },
];

export default function Teams() {
  return (
<div className="py-[48px]">
<div className="relative">
      <div className="absolute right-0 w-[280px] h-[535px]" style={{background: `url(${leaderBg}) no-repeat center/cover`}}>

      </div>
      <div className="container px-[20px]">
        <div className="top-padding ">
          <div>
            <h1
              className="text-[36px] text-[#076F74] font-bold text-center"
              style={{ fontFamily: "Noe Display" }}
            >
              Leadership
            </h1>
          </div>

          <div className="flex justify-center ">
            <p className="text-[20px] text-[#3C465F] font-poppins font-regular leading-[28px]   pt-[16px] text-start">
              As co-founders, our dream is not just to build a successful
              company, but to create a meaningful legacy that positively impacts
              the world. We envision a future where our innovations empower
              people, solve pressing challenges, and inspire others to dream big
              and make a difference.
            </p>
          </div>

          <div className="pt-[64px] xl:px-[120px] lg:px-[0px] px-[60px] container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembersData.map((member, index) => (
                <div key={index}>
                  <div className={teams.box}>
                    <div
                      className={member.bgImages}
                      style={{
                        background: `url(${member.backgroundImage}) no-repeat center/cover`,
                      }}
                    >
                      {/* <div className={teams.images}></div> */}
                    </div>
                  </div>

                  <div className={teams.paddingBox}>
                    <h4 className={teams.teamHeading}>{member.name}</h4>
                    <p className={teams.coHeading}>{member.role}</p>

                    <div className="flex justify-center">
                      <div className="flex pt-[7px]">
                        <Facebook></Facebook>
                        <Twitter></Twitter>
                        <Linkedin></Linkedin>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}
