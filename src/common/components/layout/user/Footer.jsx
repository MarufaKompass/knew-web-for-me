// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import logo from "../user/images/logo.png";
// import blobs from "../../../../assets/image/contacu-us-blobs.png";

// import { PricingContext } from "./../../../../context/PricingProvider";
// import { useContext } from "react";

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// const footer = {
//   link: " text-primary font-semibold",
//   footers: " md:pl-8 pl-2 text-[17px] font-normal text-blue-500",
// };
// export default function Footer() {
//   const { solutions, partners } = useContext(PricingContext);

//   const scrollHandler = (eleRef) => {
//     console.log(eleRef);
//     window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
//   };
//   return (
//     <section className="lg:px-6 px-4">
//       <div className="" style={{ background: `url(${blobs})` }}>
//         <div className="container">
//           <div className="hero  pb-12">
//             <div className="text-center">
//               <div className="max-w-md ">
//                 <div className="border-b-2 border-[#f8f8f8]-500  mb-6">
//                   <div>
//                     <LazyLoadImage    effect="opacity" src={logo} alt="" className="m-auto w-40" />
//                   </div>
//                   <p className="py-4 pb-6 text-paragraph-base text-lg font-normal">
//                     Transforming your workplace is easier than you think.
//                   </p>
//                 </div>
//                 <ul className="flex justify-center gap-4">
//                   <li>
//                     {" "}
//                     <Link className={footer.link} to="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className={footer.link} to="/pricing">
//                       Pricing
//                     </Link>
//                   </li>
//                   <li onClick={() => scrollHandler(solutions)}>
//                     <Link className={footer.link} to="/">
//                       Solutions
//                     </Link>
//                   </li>
                
//                   <li>
//                     <Link className={footer.link} to="/About">
//                       About Us
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div>
           
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
