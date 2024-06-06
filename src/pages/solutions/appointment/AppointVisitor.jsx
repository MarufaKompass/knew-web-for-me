import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Visitor from "./Visitor";
import visitorRound from "../../../assets/Nimages/Appointment/visitorRound.png";
import welcomeKompass from "../../../assets/Nimages/Appointment/welcomeKompass.png";

export default function AppointVisitor() {
  const [visitors, setVisitor] = useState([]);
  useEffect(() => {
    fetch("visitors.json")
      .then((res) => res.json())
      .then((data) => setVisitor(data));
  }, []);
  return (
    <div className="bg-[#FFFDF6]">
      <div className="py-[100px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="...">
            <div className="lg:flex hidden">
            <div
              className="w-[372px] h-[515px] "
              style={{ background: `url(${visitorRound}) no-repeat center` }}
            >
              <div className="w-[463px] ml-[100px]  lg:flex  hidden">
                <img src={welcomeKompass} alt="welcomeKompass" />
              </div>
            </div>
            </div>
          </div>
          <div className="col-span-1 ...">
            <div className="px-4">
              <h1
                className=" text-[40px] font-bold  text-[#071635]  "
                style={{ fontFamily: "Noe Display" }}
              >
                Everything you <span className="text-[#11989F]">need</span> to
                welcome <span className="text-[#11989F]"> visitor </span>
              </h1>
              <p className="pt-4 text-[#767676] text-[18px] font-poppins font-normal">
                See exactly who’s visiting, when, and why with a visitor
                management system
              </p>
            </div>

            <div className="mr-[160px] pt-[60px]">
              <Visitor></Visitor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
