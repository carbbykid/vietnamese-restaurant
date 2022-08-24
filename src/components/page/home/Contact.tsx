import Axios from "config/Axios";
import { useState } from "react";
import {
  FaChevronRight,
  FaLock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = ({
  formTitle,
  address,
  firstPhoneNumber,
  secondPhoneNumber,
  email,
}: {
  formTitle: string;
  address: string;
  firstPhoneNumber: string;
  secondPhoneNumber?: string;
  email: string;
}): JSX.Element => {
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [formContact, setFormContact] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Axios.post("/contact", {
      email: email,
      createdAt: new Date().toString(),
    });
  };

  const handleFormContact = (e: any) => {
    // setFormContact({...formContact, e.target.value});
  };

  return (
    <div className="bg-contact-bg pb-[160px] pt-[110px]">
      <div className="wrap-content">
        <div className="w-[555px] bg-white px-[40px] pt-[38px] pb-[34px] m-auto">
          <h2 className="font-bold tracking-tighter sm:text-[27px] text-chipo-heading">
            {formTitle}
          </h2>
          <div className="pt-[25px] pb-[30px] leading-[26px] text-[16px]">
            <div className="flex items-center">
              <FaMapMarkerAlt className="inline mr-[4px]" />
              {address}
            </div>
            <div className="py-[10px] flex">
              <FaPhoneAlt className="inline mr-[4px]" />
              <div>
                {firstPhoneNumber} {secondPhoneNumber && <br />}
                {secondPhoneNumber}
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="inline mr-[4px]" />
              {email}
            </div>
          </div>
          <button
            onClick={() => setIsDisplayForm((prev) => !prev)}
            className="sm:text-[19px] px-[33px] w-full leading-[63px] font-semibold text-white bg-chipo-blue ease-in duration-300 hover:bg-chipo-heading"
          >
            CONTACT US
          </button>
        </div>

        {isDisplayForm && (
          <div className="text-center">
            <form onSubmit={handleSubmit} className="max-w-[750px] m-auto">
              <div className="flex">
                <input
                  type="text"
                  className="font-[19px] leading-[80px] px-[38px] w-full bg-white"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={handleFormContact}
                />
                <button
                  className="bg-chipo-blue py-[10px] px-[40px] hover:bg-chipo-text ease-in duration-200"
                  type="submit"
                >
                  <FaChevronRight className="text-[30px] text-white" />
                </button>
              </div>
            </form>
            <div className="mt-[22px]">
              <div className="flex items-center justify-center">
                <FaLock className="inline mr-[8px]" />
                No Spam. We Promise. Unsubscribe anytime.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
