import React from "react";
import Navigation from "./Navigation/Navigation";
import FooterUp from "./FooterUp";

export default function Layout({ children }) {
  return (
  
    <div className="w-full">
      <Navigation />
      <main>{children}</main>
      <FooterUp></FooterUp>
    </div>
  );
}
