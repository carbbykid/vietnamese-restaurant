import FormInput from "components/common/FormInput";
import Axios from "config/Axios";
import Image from "next/image";
import { useState } from "react";

export type FormValue = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type nameType = keyof FormValue;

const initForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const NewsLetter = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [formContact, setFormContact] = useState<FormValue>(initForm);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Axios.post("/contact", {
      email: email,
      createdAt: new Date().toString(),
    });
  };

  const handleFormContact = (e: any) => {
    setFormContact((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-14 pb-24 bg-contact bg-cover bg-no-repeat relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#674747] opacity-70" />
      <div className="wrap-content relative z-10">
        <h2 className="title text-center">Contact us</h2>
        <div className="heading text-center">
          Vietnamese Restaurant Newsletter
        </div>
        <div className="grid grid-cols-5 gap-8 mt-20">
          <div className="col-span-3">
            <form action="" className="">
              <div className="flex gap-3 justify-between">
                {inputs.slice(0, 2).map((input, idx) => (
                  <FormInput
                    classNameWrap="flex-1"
                    key={idx}
                    {...input}
                    value={formContact[input.name as "name"]}
                    onChange={handleFormContact}
                    className="w-full bg-transparent border border-dashed rounded-md px-3 py-4 leading-[24px] font-light mb-5 md:mb-[34px] flex-1"
                  />
                ))}
              </div>

              {inputs.slice(2).map((input, idx) => (
                <FormInput
                  classNameWrap="mb-5 md:mb-[34px] last-of-type:mb-0"
                  key={idx}
                  {...input}
                  value={formContact[input.name as "name"]}
                  onChange={handleFormContact}
                  className="w-full bg-transparent border border-dashed rounded-md px-3 py-4 font-light h-auto"
                />
              ))}
              <button
                type="submit"
                className="button-primary w-full py-2.5 mt-1"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="col-span-2 rounded-lg bg-chipo-hover-text mb-10 p-5 flex flex-col justify-center items-center text-center">
            <Image
              width={80}
              height={80}
              objectFit="contain"
              src="/images/home/logo.png"
            />

            <h3 className="font-montserrat text-5xl font-bold text-center mt-8">
              Contact Us
            </h3>
            <p className="mt-6 font-semibold">Phone Number</p>
            <p className="text-4xl font-bold">0975 135 411</p>
            <p className="mt-3 font-semibold">Address</p>
            <p className="">
              Hoàng Hữu Nam Street, District 9,
              <br /> Thủ Đức City
            </p>
            <div className="border-2 w-10 border-chipo-text-dark my-4" />
            <div className="flex justify-between w-full">
              <div className="flex-1 text-center">
                <h4>Lunch Time</h4>
                <p className="mt-2">10:00 AM - 01h00 PM</p>
              </div>

              <div className="flex-1 text-center">
                <h4>Dinner Time</h4>
                <p className="mt-2">6h00 PM - 20h00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

const inputs = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    required: true,
    errorMessage: "This field is required.",
  },
  {
    name: "phoneNumber",
    type: "number",
    placeholder: "Phone Number",
    required: false,
    errorMessage: "This field is required.",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    required: true,
    errorMessage: "This field is required.",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: false,
    errorMessage: "This field is required.",
  },
  {
    name: "message",
    type: "text",
    placeholder: "Message",
    required: false,
    types: "textarea",
    errorMessage: "This field is required.",
    rows: "4",
  },
];
