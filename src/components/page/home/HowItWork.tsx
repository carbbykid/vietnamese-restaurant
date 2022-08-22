import { FaChevronRight } from "react-icons/fa";
const HowItWork = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  return (
    <div className="bg-chipo-bg-second pb-[160px] pt-[110px]">
      <div className="wrap-content">
        <h2 className="text-xl font-bold tracking-tighter mb-[20px] sm:text-5xl text-center text-chipo-heading">
          {heading}
        </h2>
        <div className="message">{message}</div>
        <div className="mt-[90px] flex gap-[20px] justify-center">
          {mockData.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="h-[110px] relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="sm:w-[98px] sm:max-h-[110px] m-auto"
                />
                <FaChevronRight className="absolute top-[50%] right-[15px] text-2xl font-light" />
              </div>

              <div className="pt-[60px] pb-[8px] font-semibold sm:text-[26px] text-chipo-heading">
                {item.heading}
              </div>
              <p className="pb-[10px] text-chipo-text">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

const mockData = [
  {
    src: "/images/home/desktop.png",
    alt: "desktop",
    heading: "Connect Device",
    message:
      " Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.",
  },
  {
    src: "/images/home/toggles.png",
    alt: "toggles",
    heading: "Configure it",
    message:
      "Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.",
  },
  {
    src: "/images/home/trophy.png",
    alt: "trophy",
    heading: "Yay! Done.",
    message:
      "Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.",
  },
];
