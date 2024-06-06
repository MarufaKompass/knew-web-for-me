import React, { useContext } from "react";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { PricingContext } from "./../../context/PricingProvider";
import trash from "../../assets/image/trash.png";
import {
  getBdtDiscountedPrice,
  getUsdDiscountedPrice,
} from "../../common/utils/discountLogics";

export default function CheckCard({ pricing }) {
  const { cart, setCart, location } = useContext(PricingContext);
  const { ename, etype, ecode, dxinfo, isYearly } = pricing;

  let bdtYearlyMainPrice = getBdtDiscountedPrice(dxinfo);
  let usdYearlyMainPrice = getUsdDiscountedPrice(dxinfo);

  const deleteItem = () => {
    const newCart = cart.filter((carts) => carts.ecode !== ecode);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Item Successfully Delete");
  };

  return (
    <div className="lg:pr-10 pr-0 mb-4 relative">
      <div className="border-b-2">
        <div className="  px-4 py-2  bg-white">
          <div className="text-left">
            <div>
              {(() => {
                if (ename === "VMS") {
                  return (
                    <div>
                      {" "}
                      <h1 className="text-[#0C1E21] font-regular font-poppins  pb-[20px] text-[24px]">
                        Kompass Connect
                      </h1>
                      {/* <div className="md:w-72 w-full text-primary border mb-2 mt-2 border-primary"></div> */}
                    </div>
                  );
                } else if (ename === "LMS") {
                  return (
                    <div>
                      <h1 className="text-[#0C1E21] font-regular font-poppins  pb-[20px] text-[24px]">
                        Kompass Lobby
                      </h1>
                      {/* <div className="md:w-72 w-full text-primary border mb-2 mt-2 border-primary"></div> */}
                    </div>
                  );
                }
                if (ename === "PMS") {
                  return (
                    <div>
                      <h1 className="text-[#0C1E21] font-regular font-poppins  pb-[20px] text-[24px]">
                        Kompass Teams
                      </h1>
                      {/* <div className="md:w-72 w-full text-primary border mb-2 mt-2 border-primary"></div> */}
                    </div>
                  );
                }
              })()}
            </div>
            <h1 className=" text-[#0C1E21] font-regular text-[16px] font-poppins">
              {etype}
            </h1>
            <div>
              <div>
                {isYearly ? (
                  <div className="pb-4">
                    {location.uconunty === "Bangladesh" ? (
                      <div>
                        <p className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                          {+dxinfo.vanudis > 0 ? (
                            <>
                              <></>
                            </>
                          ) : (
                            <>{null}</>
                          )}
                        </p>
                        <div className="flex justify-between">
                          <div>
                            <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                              Price :
                            </span>
                          </div>
                          <div>
                            <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            ৳
                            </span>
                            <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                              {bdtYearlyMainPrice}
                            </span>

                            <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                              /year
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between">
                        <div>
                          <p className=" xl:text-[1.3rem] text-[1.1rem]">
                            {+dxinfo.vanudis > 0 ? <span></span> : <>{null}</>}{" "}
                          </p>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            {" "}
                            Price :
                          </span>
                        </div>

                        <div>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            $
                          </span>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            {usdYearlyMainPrice}
                          </span>

                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            /year
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className=" pb-4">
                    {location.uconunty === "Bangladesh" ? (
                      <div className="flex justify-between">
                        <div>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            Price :
                          </span>
                        </div>
                        <div>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                          ৳
                          </span>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            {" "}
                            {dxinfo.vubdt}
                          </span>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            /mo
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between">
                        <div>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            Price :
                          </span>
                        </div>
                        <div>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            $
                          </span>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            {" "}
                            {dxinfo.vusd}
                          </span>
                          <span className="text-[#0C1E21] font-regular text-[16px] font-poppins">
                            /mo
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <label onClick={deleteItem} className="absolute top-8 right-14 ">
            {/* <LazyLoadImage  effect="opacity" src={trash} alt="" className="mt-[2.7rem]" /> */}
            <p className="text-[#E14B4B] font-normal font-poppins text-[16px] ">
              Remove
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}
