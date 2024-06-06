import React from "react";
import connected from "../../assets/image/Kompass_Connect_Welcome.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function KompassConnected() {
  return (
    <div className="w-full">
      <img
        src={connected}
        alt=""
        className="w-full"
      />
    </div>
  );
}
