import Axios from "config/Axios";
import { useState } from "react";
import { FaChevronRight, FaLock } from "react-icons/fa";

const NewsLetter = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Axios.post("/newsletter", {
      email: email,
      createdAt: new Date().toString(),
    });
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-chipo-bg-second pb-[160px] pt-[110px]">
      <div className="wrap-content">
        <div className="mb-[50px]">
          <h2 className="text-xl font-bold tracking-tighter mb-[20px] sm:text-5xl text-center text-chipo-heading">
            {heading}
          </h2>
          <div className="message mb-[20px]">{message}</div>
          <hr className="divider" />
        </div>

        <div className="text-center">
          <form onSubmit={handleSubmit} className="max-w-[750px] m-auto">
            <div className="flex">
              <input
                type="text"
                className="font-[19px] leading-[80px] px-[38px] w-full bg-white"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={handleEmail}
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
      </div>
    </div>
  );
};

export default NewsLetter;
