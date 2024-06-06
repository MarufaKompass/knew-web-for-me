import React, { useContext } from "react";
import MultiStepProgressBar from "../../common/components/multiStepProgressBar/MultiStepProgressBar";
import BankInfo from "../bankInfo/BankInfo";
import CheckOut from "../checkout/CheckOut";

import { PricingContext } from "./../../context/PricingProvider";
import ConfirmPayment from "./../checkout/ConfirmPayment";

//global variable

export default function Processing() {
  const { page, setPage } = useContext(PricingContext);

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("checkout");
        break;
      case "2":
        setPage("bankInfo");
        break;
      case "3":
        setPage("confirmPayment");
        break;
      // case "4":
      //   setPage("confirmPayment");
      //   break;
      default:
        setPage("1");
    }
  };
  return (
    <div className="cart">
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          checkout: <CheckOut onButtonClick={nextPage} />,
          bankInfo: <BankInfo onButtonClick={nextPage} />,
          // payment: <Payment onButtonClick={nextPage} />,
          confirmPayment: <ConfirmPayment onButtonClick={nextPage} />,
        }[page]
      }
    </div>
  );
}
