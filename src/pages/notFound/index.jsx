import React from "react";
import notFound from "../../assets/image/404page.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mt-14">
      <div className="flex justify-center items-center h-full">
        <LazyLoadImage    effect="opacity" src={notFound} alt="" />
      </div>
      <div className="flex justify-center mt-16">
        <Link to="/">
          <button className="btn btn-primary text-white px-10">Home</button>
        </Link>
      </div>
    </div>
  );
}
