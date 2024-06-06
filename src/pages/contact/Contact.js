import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { PricingContext } from "../../context/PricingProvider";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const [error, setError] = useState([]);
  const [contact, setContact] = useState([]);
  const { userData, setUserData, pCode } = useContext(PricingContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    axios
      .post("https://api.hellokompass.com/contactemail", data)
      .then((res) => {
        if (res.data.code === 200) {
          setContact(res.data);
          toast.success(res.data.message);
          reset();
        } else {
          toast.error(res.data.message);
        }
      });
  };

  return (
    <div className="px-6 bg-[#f8f8f8] lg:py-24 md:py-14 py-12">
      <div className="container">
        <div className="text-center mb-14">
          <h1 className="lg:text-xl text-heading-md font-medium  text-custom-base-head leading-[42px] lg:leading-[55px]">
            Contact With Us
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="rounded-lg">
            <iframe
              style={{ borderRadius: "4px" }}
              width="100%"
              height="550"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kompass%20,gulshan%20Dhaka%20+(Map)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://maps-generator.com/"></a>
          </div>

          <div className=" rounded-lg">
            <div className="mb-4 text-center">
              <h2 className="font-medium text-custom-base-head text-heading-md ">
                Grow Your <span className="text-primary">Business</span> With
                Our Expertise
              </h2>
              <p className="py-6 text-paragraph-base text-lg font-[350]">
                Want to know more? Fill out the form below or contact our team
                on for support requests, please click here.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 ">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered w-full rounded-none"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>

              <div>
                {/* number */}
                <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 mt-1">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Number</span>
                    </label>
                    <div className="flex gap-2">
                      <div>
                        <select
                          name="country"
                          value={userData["pcode"]}
                          {...register("country", {
                            required: true,
                            onChange: () => setUserData({ ...userData }),
                          })}
                          className="input input-bordered w-full rounded-none"
                        >
                          {pCode.map((code) => (
                            <option
                              selected={code.pcode === "88"}
                              value={code.pcode}
                              key={code.id}
                            >
                              {code.name}( {code.pcode})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-control w-full">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          name="phone"
                          className="input input-bordered w-full rounded-none"
                          {...register("phone", { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 mt-1">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    className="input input-bordered w-full rounded-none"
                    {...register("subject", { required: true })}
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 mt-1">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Write a comment..."
                    className="textarea input-bordered rounded-none"
                    name="message"
                    {...register("message", { required: true })}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <input
                  className="btn w-48 btn-primary text-[#fff] font-semibold "
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
