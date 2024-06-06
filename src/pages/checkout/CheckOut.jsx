import React, { useContext } from "react";
import { PricingContext } from "../../context/PricingProvider";
import CartCardShow from "./CheckOutCard";
import ProductCalculation from "./ProductCalculation";
import cartBg from "../../../src/assets/Nimages/Cart/cart1.png";

export default function CheckOut({ onButtonClick }) {
  const { cart } = useContext(PricingContext);

  return (
    <div className="container pb-[60px]">
      <div className="sm:px-6 md:px-0 pt-8 pb-[60px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="col-span-2">
            {/* || cart === [] */}
            {+cart === 0  ? (
            <div>
           <div className=" flex justify-center">
           <img src={cartBg} alt="cart" className="w-80 h-80"/>
            </div>
                <div className=" flex justify-center pt-[40px]">
                 
                  <span className="text-[#0C1E21] font-poppins font-bold text-[30px]">Your cart is Empty</span>
                </div>
              
              </div>
            ) : (
              <div>
                {cart.map((pricing, index) => (
                  <CartCardShow pricing={pricing} key={index}></CartCardShow>
                ))}
              </div>
            )}
          </div>
       


            <div>
              <ProductCalculation pricing={cart} ></ProductCalculation>
            </div>
          
            
         
            
         
        </div>
        {/* || cart === [] */}
        {+cart === 0  ? (
          <button
            disabled={true}
            className=" bg-info border w-28 mt-6 h-10 rounded-[10px] text-[#6c6c6c] font-semibold0 text-[.9rem]  float-right"
          >
            NEXT
          </button>
        ) : (
          <button
            disabled={false}
            className="bg-[#0C1E21] border w-28 mt-6 h-10 rounded-[32px] text-white font-semibold text-[.9rem]  float-right"
            onClick={() => onButtonClick("bankInfo")}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
}
