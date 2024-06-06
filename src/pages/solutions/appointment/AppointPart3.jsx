import React from "react";
import appoint2 from "../../../assets/image/appoint-2.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function AppointPart3() {
  return (
    <div className="hero  py-24 px-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse ">
          <div className="px-2  flex-1 flex lg:justify-start  justify-center">
            <LazyLoadImage
              src={appoint2}
              effect="opacity"
              alt=""
            />
          </div>

          <div className="flex h-100 items-center justify-center flex-1">
            <div className="lg:mt-0 mt-10">
              <h1 className="font-medium lg:text-left text-center lg:text-xl text-heading-md  text-custom-base-head leading-[42px] lg:leading-[55px] pb-4">
                Keep your workplace Safe and Smart
              </h1>
              <p className="lg:text-left text-center   text-lg font-[350]  text-paragraph-base  lg:pl-18 lg:px-0 md:px-28 px-0">
                See exactly who’s visiting, when, and why with a visitor
                management system that lets you set your own entry criteria.
                Promote a healthy workplace with a touchless sign-in and
                document verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
