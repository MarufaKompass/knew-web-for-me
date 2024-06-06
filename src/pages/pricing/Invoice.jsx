import React, { useContext, useRef, useState } from "react";
import { PricingContext } from "../../context/PricingProvider";
import invoLogo from "../../common/components/layout/user/images/logo.png";
import Download from "../../common/components/svg/store/Download";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Authorised_Sign from "../../assets/image/Authorised_Sign.png";
import invoiceQr from "../../assets/image/invoice_qrCode.png";
import Pdf from "react-to-pdf";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
// import {datePicker} from 'react-day-picker;r';
import ReactToPrint from "react-to-print";
import Print from "../../common/components/svg/store/Print";
import { upperCase } from "lodash";
const ref = React.createRef();
const options = {
  orientation: "A4",
  unit: "in",
};

export default function Invoice({ odrx }) {
  //console.log(odrx)

  const { location, pCode } = useContext(PricingContext);
  const [selected] = useState(new Date());

  let number = 0;

  // let mainTotal = parseFloat(odrx.wreg_subtotal - odrx.wreg_discount_amount || 0);
  // let withVat = parseFloat(mainTotal) + parseFloat(odrx.wreg_vat);
  // let total = parseFloat(withVat.toFixed(2));

  let componentRef = useRef();

  // var converter = require("number-to-words");
  // const TotalInWord = converter.toWords(total || 0);

  let payStatus = upperCase(odrx.wreg_status);

  let mainVat;
  let vatValue;
  for (const vat of pCode) {
    if (vat.name === "Bangladesh") {
      mainVat = parseFloat(vat.vatpercent);
      vatValue = parseFloat(mainVat / 100);
    } else if (vat.name == !"Bangladesh") {
      mainVat = parseFloat(vat.vatpercent);
      vatValue = parseFloat(mainVat / 100);
    } else {
      <></>;
    }
  }

  return (
    <div>
      <div className="flex  justify-end mb-6 mt-8">
       
      
            <button onClick={() => window.location.href = `https://api.hellokompass.com/pdfinvoice/${odrx.order_id}`}>
              <small className="text-[12px] text-custom-base-head">
                Download
              </small>
            </button>
        
  

        {/* <ReactToPrint
          trigger={() => (
            <button className="ml-6 ">
              <small className="text-[12px] text-custom-base-head">
                Print out!
              </small>
              <div className="ml-[14px]">
                <Print></Print>
              </div>
            </button>
          )}
          content={() => componentRef}
          pageStyle="@page { size: A4; margin: 0in; } @media print { body { -webkit-print-color-adjust: exact; } }"
          {...options}
        /> */}
      </div>

      <div className="border h-ful relative">
        <div
          className=" mt-8  w-full  h-[1082px]"
          ref={(el) => (componentRef = el)}
        >
          <div ref={ref} size="A4">
            <div>
              <div className="px-12">
                <div className="flex justify-between w-full h-full">
                  <div>
                    <LazyLoadImage
                      effect="opacity"
                      src={invoLogo}
                      className="w-28"
                      alt=""
                    />

                    <div className=""></div>
                  </div>
                  <div>
                    <h1 className="text-[22px] text-right font-bold">
                      INVOICE
                    </h1>
                  </div>
                </div>

                <div className="mt-16">
                  <div className="flex justify-between gap-20">
                    <div className="">
                      <span className="text-InvoFontP text-custom-base-head font-bold flex justify-center">
                        Date :
                        <span className=" text-paragraph-base ml-2 text-InvoFontP flex justify-center">
                          {format(selected, "PP")}
                        </span>
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-end ">
                        <p className="text-InvoFontP text-custom-base-head font-bold">
                          Invoice #{" "}
                          <span className="text-paragraph-base  text-InvoFontP font-normal">
                            {odrx.order_id}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-end mt-1 ">
                        <p className="text-InvoFontP text-custom-base-head font-bold">
                          Transaction ID #{" "}
                          <span className="text-paragraph-base  text-InvoFontP font-normal">
                            {odrx.transection_id}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4 gap-20">
                    <div className="">

                      <p className="text-custom-base-head mt-1 font-bold">
                        Company Name: {odrx.billing_person}
                      </p>
                      <p className="text-custom-base-head mt-1 font-bold">
                        Company Name: {odrx.company_name}
                      </p>
                      <p className="text-custom-base-head mt-1">
                        {" "}
                        Address : {odrx.company_address}
                      </p>
                      <p className="text-custom-base-head mt-1">
                        {" "}
                        Email : {odrx.comapny_email}
                      </p>
                      <p className="text-custom-base-head mt-1 mb-4">
                        {" "}
                        Phone : {odrx.company_phone}
                      </p>
                    </div>

                    <div className="text-right ">
                      <p className="text-custom-base-head font-bold">
                        Payment Status
                      </p>
                      <div className=" mt-1">
                        <h1 className="text-[25px] font-bold  ">{payStatus}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="overflow-x-auto border border-indigo-[#d3d3d3] ">
                    <table className=" w-full px-2">
                      <thead className="text-[#fff]">
                        <tr>
                          <th className="bg-primary text-[.7rem] px-6 py-3 text-center w-4">
                            SL
                          </th>
                          <th className="bg-primary text-[.7rem] px-6 py-3 text-center w-32">
                            Product
                          </th>
                          <th className="bg-primary text-[.7rem] px-6 py-3 text-center w-32">
                            License
                          </th>
                          <th className="bg-primary text-[.7rem] px-6 py-3 text-center w-28">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {odrx?.vms_info?.vsname === "VMS" ? (
                          <tr>
                            <th className=" text-[.8rem] text-center">
                              {++number}
                            </th>
                            {odrx?.vms_info?.vsname == "VMS" ? (
                              <td className="text-[.8rem] py-3 px-2 text-center">
                                Kompass Connect
                              </td>
                            ) : (
                              <td className="text-[.8rem] py-3 px-2 text-center">
                                Kompass Connect
                              </td>
                            )}

                            <td className="bg-[#c2efef] text-[.8rem] py-3 px-2 text-center">
                              {odrx?.vms_info?.vstype}{" "}
                              <sub className="text-[0.5rem] font-semibold">
                                ({odrx?.vms_info?.vbtenor})
                              </sub>
                            </td>
                            {odrx.vms_info.vbtenor == "YEARLY" ? (
                              <td className="text-[0.8rem] text-center py-3 px-2">
                                {odrx?.vms_info?.vsamount}
                              </td>
                            ) : (
                              <td className="text-[0.8rem] text-center py-3 px-2">
                                {odrx?.vms_info?.vsamount}
                              </td>
                            )}
                          </tr>
                        ) : null}

                        {odrx?.payroll_info?.plname === "PMS" ? (
                          <tr>
                            <th className=" text-[.8rem] text-center">
                              {++number}
                            </th>
                            {odrx?.payroll_info?.plname == "PMS" ? (
                              <td className="text-[0.8rem] py-3 px-2 text-center">
                                {" "}
                                Kompass Teams{" "}
                              </td>
                            ) : (
                              <td className="text-[0.8rem] py-3 px-2 text-center">
                                {" "}
                                Kompass Teams{" "}
                              </td>
                            )}

                            <td className=" text-[.8rem] py-3 px-2 text-center">
                              {odrx?.payroll_info?.pltype}{" "}
                              <sub className="text-[0.5rem] font-semibold">
                                ({odrx?.payroll_info?.pltenor})
                              </sub>
                            </td>
                            {odrx.payroll_info.pltenor == "YEARLY" ? (
                              <td className="text-[0.8rem] text-center py-3 px-2">
                                {odrx?.payroll_info?.plamount}
                              </td>
                            ) : (
                              <td className="text-[0.8rem] text-center py-3 px-2">
                                {odrx?.payroll_info?.plamount}
                              </td>
                            )}
                          </tr>
                        ) : null}

                        {odrx?.lobby_info?.lbname === "LMS" ? (
                          <tr>
                            <th className="text-[.8rem] text-center">
                              {++number}
                            </th>
                            {odrx?.lobby_info?.lbname == "LMS" ? (
                              <td className="text-[0.8rem] py-3 px-2 text-center">
                                Kompass Lobby
                              </td>
                            ) : (
                              <td className="text-[0.8rem] py-3 px-2 text-center">
                                Kompass Lobby
                              </td>
                            )}

                            <td className=" text-[.8rem] py-3 px-2 text-center">
                              {odrx?.lobby_info?.lbtype}{" "}
                              <sub className="text-[0.5rem] font-semibold">
                                ({odrx?.lobby_info?.lbtenor})
                              </sub>
                            </td>
                            {odrx.lobby_info.lbtenor == "YEARLY" ? (
                              <td className="text-[0.8rem] text-center py-3 px-2">
                                {" "}
                                {odrx?.lobby_info?.lbamount}
                              </td>
                            ) : (
                              <td className="text-[0.8rem] text-center py-3 px-2">
                                {odrx?.lobby_info?.lbamount}
                              </td>
                            )}
                          </tr>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <div>
                    <p className="flex justify-start items-center h-20">
                      {" "}
                      In Word : {odrx.inword_amount}
                    </p>
                  </div>

                  {location.uconunty === "Bangladesh" ? (
                    <div>
                      <div className="flex justify-between ">
                        <p className=" text-InvoFontP text-custom-base-head font-semibold mr-4">
                          Sub Total :
                        </p>
                        <span className=" text-InvoFontP text-custom-base-head">
                          {odrx.wreg_subtotal} ৳
                        </span>
                      </div>
                      {odrx.wreg_discount_amount > 0 ? (
                        <div className="flex justify-between mt-2">
                          <p className="text-InvoFontp text-custom-base-head font-semibold ">
                            Discount :
                          </p>
                          <span className="text-InvoFontP text-custom-base-head">
                            {odrx.wreg_discount_amount} ৳
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}

                      <div className="flex justify-between mt-2">
                        <p className="text-InvoFontP text-custom-base-head font-semibold ">
                          VAT({mainVat}%) :
                        </p>
                        <span className="text-InvoFontP text-custom-base-head">
                          {odrx.wreg_vat} ৳
                        </span>
                      </div>

                      <div className="divider my-[2px]"></div>
                      <div className="flex justify-between">
                        <p className="text-InvoFontP text-custom-base-head font-semibold m4-4">
                          Total :
                        </p>
                        <span className="text-InvoFontP text-custom-base-head ">
                          {odrx.wreg_total} ৳
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between">
                        <p className=" text-InvoFontP text-custom-base-head font-semibold mr-4">
                          Sub Total :
                        </p>
                        <span className=" text-InvoFontP text-custom-base-head">
                          {odrx.wreg_subtotal} $
                        </span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="text-InvoFontP text-custom-base-head font-semibold ">
                          Discount :
                        </p>
                        <span className="text-InvoFontP text-custom-base-head">
                          $ {odrx.wreg_discount_amount}
                        </span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="text-InvoFontP text-custom-base-head font-semibold ">
                          VAT({mainVat}%) :
                        </p>
                        <span className="text-InvoFontP text-custom-base-head">
                          $ {odrx.wreg_vat}
                        </span>
                      </div>

                      <div className="divider my-[2px]"></div>
                      <div className="flex justify-between">
                        <p className="text-InvoFontP text-custom-base-head font-semibold mt-4">
                          Total :
                        </p>
                        <span className="text-InvoFontP text-custom-base-head">
                          ${odrx.wreg_total}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between ">
                <div className="mt-12">
                  <img src={invoiceQr} alt="alt" className="w-28 h-28"></img>
                  <small className="flex justify-center">Scan To Verify</small>
                </div>
                <div className="mt-[6.5rem]">
                  <img
                    className="object-right"
                    src={Authorised_Sign}
                    alt=""
                  >

            </img>
                </div>
              </div>

                {/* <div className="mt-48">
                  <div>
                    <h1 className="text-[1.5rem] font-semibold pb-2">Payment Details</h1>
                  </div>
                  <div>
                    <table class="w-full border">
                      <thead>
                        <tr className="border">
                          <th className="py-2 text-[13px]">BANK DEPOSIT</th>
                          <th className="py-2 text-[13px]">CHEQUE/DRAFT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border">
                            <table >
                              <tbody>
                                <tr className="text-[13px] ">
                                  <td className="text-left px-3 py-1 w-2/6">Account Name</td>  
                                  <td className="">: Kompass Technologies Limited</td> 
                                </tr>
                                <tr className="text-[13px] ">
                                  <td className="text-left px-3 py-1 w-2/6">Account No     </td>
                                  <td>: 1042101000007569</td>
                                </tr>
                                <tr className="text-[13px] ">
                                  <td className="text-left px-3 py-1 w-2/6">Bank Name   </td>
                                  <td>: United Commercial Bank Ltd</td> 
                                </tr>
                                <tr className="text-[13px] ">
                                  <td className="text-left px-3 py-1 w-2/6">Branch Details </td>
                                  <td>: Tejgaon</td> 
                                </tr>
                                <tr className="text-[13px] ">
                                  <td className="text-left px-3 py-1 w-2/6">Routing </td>
                                  <td>: 0245264485</td>
                                </tr>
                                <tr className="text-[13px] ">
                                  <td className="text-left px-3 py-1 w-2/6">City</td>
                                  <td>: Dhaka-North</td> 
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td className="py-1 px-2 text-center text-[13px] w-2/5">
                           AC Payee Cheque in favor of <br></br>
                           "Kompass Technologies Limited"
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
              </div>

              <div className="absolute left-0 bottom-0 w-full ">
                <div className="">
                  <div className="text-custom-base-head text-right text-InvoFontP px-10 mb-2">
                    <p className="text-InvoFontP font-bold">
                      Kompass Technology Ltd
                    </p>
                    <p className="text-InvoFontP">
                      Address : Suite 6B,H 10, R 1, Block B,Niketan
                      Gulshan,Dhaka 1212, Bangladesh
                    </p>
                    <span className="text-InvoFontP">
                      Phone : +88 02 48811450
                    </span>
                    <span> | </span>
                    <span className="text-InvoFontP">
                      {" "}
                      Email : hello@hellokompass.com
                    </span>
                    <div className="flex justify-end"></div>
                  </div>
                </div>
                <div className="h-10 bg-primary w-full flex items-center">
                  <p className="text-white text-left w-full p-4 text-InvoFontP">
                    hellokompass.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
