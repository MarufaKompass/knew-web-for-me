import React from "react";
import Close from "../../common/components/svg/store/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { freeTrail } from "../../common/components/Validation/YupValidation";
import { useState, useEffect } from "react";
import axios from "axios";
import WhiteArrow from "../../common/components/svg/store/WhiteArrow";
import { toast } from "react-toastify";

export default function TrailModal({ setTrailModal }) {
  const [trail, setTrail] = useState("");
  const [pCode, setPCode] = useState([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      countrycode: "88",
    },
    resolver: yupResolver(freeTrail),
  });

  const onSubmit = (data) => {
    //console.log(data)
    axios.post("https://api.hellokompass.com/trailinfo", data).then((res) => {
      if (res.data.code === 200) {
        setTrail(res.data);
        // console.log(res.data);
        toast.success(res.data.message);
        setTrailModal(false);
        reset();
      } else {
        toast(res.data.message);
      }
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch("https://api.hellokompass.com/country", { signal })
      .then((res) => res.json())
      .then((data) => {
        setPCode(data.data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // console.log("request cancelled");
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="">
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl bg-[#076f74] rounded-none py-[35px] px-[80px]">
            <div className="flex justify-end">
              <label htmlFor="my-modal" className="btn-none">
                <Close></Close>
              </label>
            </div>
            <div className="text-center mb-12">
              <h1
                className="text-[60px] font-medium  font-mixed text-[#FFFFFF] "
                style={{ fontFamily: "Noe Display" }}
              >
                Request For a Free Trail
              </h1>
              <p className="text-[20px] font-normal font-poppins text-[#fff]">
                Fill out your details to get a live demo of Campaign Monitor:
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid  md:grid-cols-2  grid-cols-1 gap-4">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Full Name*
                  </p>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="personname"
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("personname", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.personname?.message}
                  </p>
                </div>
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Company Name*
                  </p>
                  <input
                    placeholder="Company Name"
                    name="companyname"
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("companyname", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.companyname?.message}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Phone Number*
                  </p>
                  <div className="flex gap-2">
                    <div>
                      <select
                        name="countrycode"
                        {...register("countrycode", { required: true })}
                        className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                      >
                        {pCode.map((code) => (
                          <>
                            <option
                              className="text-[#686868]"
                              selected={code.pcode === "88"}
                              key={code.id}
                            >
                              {code.name}({code.pcode})
                            </option>
                          </>
                        ))}
                      </select>
                    </div>

                    <div className="w-full">
                      <input
                        type="number"
                        placeholder="Phone number"
                        name="phonenumber"
                        className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                        {...register("phonenumber", { required: true })}
                      />
                      <p className="label-text-alt text-[#fff] mt-3">
                        {errors.phonenumber?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Number of Employee*
                  </p>
                  <input
                    type="number"
                    placeholder="Number of Employee"
                    name="employeenumber"
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("employeenumber", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.employeenumber?.message}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Designation*
                  </p>
                  <div>
                    <select
                      className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                      name="designation"
                      {...register("designation", { required: true })}
                    >
                      <option
                        value=""
                        selected
                        disabled
                        className="text-[#9CA3AF]"
                      >
                        Select Designation
                      </option>
                      <option
                        className="text-[#686868]"
                        value="Managing-Director"
                      >
                        Managing Director
                      </option>
                      <option
                        className="text-[#686868]"
                        value="Marketing-Coordinator"
                      >
                        Marketing Coordinator
                      </option>
                      <option className="text-[#686868]" value="Designer">
                        Director
                      </option>
                      <option className="text-[#686868]" value="CEO">
                        CEO
                      </option>
                      <option className="text-[#686868]" value="COO">
                        COO
                      </option>
                      <option className="text-[#686868]" value="CTO">
                        CTO
                      </option>
                      <option className="text-[#686868]" value="Manager">
                        Manager
                      </option>
                      <option className="text-[#686868]" value="Coordinator">
                        Coordinator
                      </option>
                      <option
                        className="text-[#686868]"
                        value="Department-Head"
                      >
                        Department Head
                      </option>
                      <option
                        className="text-[#686868]"
                        value="Project-Manager"
                      >
                        Project Manager
                      </option>
                      <option className="text-[#686868]" value="Consultant">
                        Consultant
                      </option>
                      <option className="text-[#686868]" value="Professor">
                        Professor
                      </option>
                      <option className="text-[#686868]" value="Principal">
                        Principal
                      </option>
                      <option className="text-[#686868]" value="Vice-Principal">
                        Vice Principal
                      </option>
                      <option className="text-[#686868]" value="Teacher">
                        Teacher{" "}
                      </option>
                      <option className="text-[#686868]" value="Trainer">
                        Trainer{" "}
                      </option>
                      <option className="text-[#686868]" value="Others">
                        Others{" "}
                      </option>
                    </select>
                  </div>
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.designation?.message}
                  </p>
                </div>
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Email Address*
                  </p>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("email", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.email?.message}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Billing Address*
                  </p>
                  <textarea
                    type="text"
                    placeholder="Billing Address"
                    name="address"
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("address", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.address?.message}
                  </p>
                </div>

                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Industry*
                  </p>
                  <div>
                    <select
                      className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                      name="companytype"
                      {...register("companytype", { required: true })}
                    >
                      <option
                        value=""
                        selected
                        disabled
                        className="text-[#9CA3AF]"
                      >
            Select an industry...
                      </option>
                     
                     
            
<option className="text-[#686868]"  value="agency">Agency/Consulting</option>
<option className="text-[#686868]"  value="dev_shop">Application Development Shop</option>
<option className="text-[#686868]"   value="career">Career/Job Search</option>
<option className="text-[#686868]"  value="deals">Daily Deals/eCoupons</option>
<option className="text-[#686868]"  value="dating">Dating Sites</option>
<option className="text-[#686868]"  value="ecommerce">eCommerce</option>
<option className="text-[#686868]"  value="education">Education/Training/School/College/University</option>
<option className="text-[#686868]"  value="entertainment">Entertainment/Events</option>
<option className="text-[#686868]"  value="finance">Financial Services/Banks/NBFI</option>
<option className="text-[#686868]"  value="gaming">Gaming</option>
<option className="text-[#686868]"  value="garments">Garments/Textile</option>
<option className="text-[#686868]"  value="government">Government</option>
<option className="text-[#686868]"  value="health">Health/Fitness</option>
<option className="text-[#686868]"  value="hospital">Hospital/Diagnostic Center</option>

<option className="text-[#686868]"  value="insurance">Insurance</option>
<option className="text-[#686868]"  value="marketing">Marketing/Advertising</option>
<option className="text-[#686868]"  value="media">Media/Publishing</option>
<option className="text-[#686868]"  value="mnc">MNC</option>
<option className="text-[#686868]"  value="mobile">Mobile App</option>
<option className="text-[#686868]"  value="politics">Politics/Advocacy</option>
<option className="text-[#686868]"  value="professional">Professional Services</option>
<option className="text-[#686868]"  value="real_estate">Real Estate</option>
<option className="text-[#686868]"  value="religious">Religious/Spiritual</option>
<option className="text-[#686868]"  value="retail">Retail</option>
<option className="text-[#686868]"  value="social_media">Social Media/Networking</option>
<option className="text-[#686868]"  value="tech">Technology/IT</option>
<option className="text-[#686868]"  value="telecomm">Telecommunications</option>
<option className="text-[#686868]"  value="travel">Travel/Hospitality</option>
<option className="text-[#686868]"  value="other">Other</option>
                    </select>
                  </div>
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.companytype?.message}
                  </p>
                </div>
              </div>

              <h2
                htmlFor=""
                className="text-[#fff] text-[18px] font-normal font-inter mt-4 mb-[20px]"
              >
                Trail For *
              </h2>
              <div className="flex mr-[20px] justify-between ">
                <div className="flex">
                  <div className="mr-[15px]">
                    <div className="form-control">
                      <label className="flex gap-2">
                        <input
                          type="checkbox"
                          name="vms"
                          value="vms"
                          className="checkbox checkbox-primary"
                          {...register("trailproduct", { required: true })}
                        />

                        <h2 className=" text-[#fff] text-[18px] font-normal font-inter">
                          Kompass Connect
                        </h2>
                      </label>
                    </div>
                  </div>

                  <div className="mr-[15px]">
                    <div className="form-control">
                      <label className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary"
                          name="lms"
                          value="lms"
                          {...register("trailproduct", { required: true })}
                        />
                        <h2 className=" text-[#fff] text-[18px] font-normal font-inter">
                          Kompass Lobby
                        </h2>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="form-control">
                      <label className="flex gap-2">
                        <input
                          type="checkbox"
                          name="pms"
                          value="pms"
                          className="checkbox checkbox-primary"
                          {...register("trailproduct", { required: true })}
                        />
                        <h2 className=" text-[#fff] text-[18px] font-normal font-inter">
                          kompass Teams
                        </h2>
                      </label>
                    </div>
                  </div>
                </div>
                {/* <p className="label-text-alt text-red-500 mt-3">
                  {errors.trailproduct?.message}
                </p> */}

                <div className="flex  justify-center  bg-[#fff] h-[130px] w-[130px]  rounded-[50%]">
                  <div className="flex justify-center ">
                    <input
                      className="   text-[#002C13] font-regular  text-[20px]  cursor-pointer"
                      type="submit"
                    />
                  </div>
                  <div className="mt-[53px]">
                    <WhiteArrow></WhiteArrow>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
