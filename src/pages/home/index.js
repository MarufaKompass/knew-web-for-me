import React from "react";
import Background from "./Background";
import Customer from "./Customer";
import Desking from "./Desking";
import Newsletter from "./Newsletter";
import Services from "./Services";
import Partners from "./Partners";
import NumbersOf from "./NumbersOf";
import KompassIntegration from "./KompassIntegration";

export default function Home() {
  return (
    <div>
      <Background />
      <Partners />
      <Services />
      <Desking />
      <NumbersOf />
      <Customer />
      <KompassIntegration />
      <Newsletter />
    </div>
  );
}
