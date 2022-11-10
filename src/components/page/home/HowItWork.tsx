import { FaChevronRight } from "react-icons/fa";
const HowItWork = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  return (
    <div className="bg-chipo-bg-second pb-16 md:pb-[160px] pt-10 md:pt-[110px]">
      <div className="wrap-content">
        <h2 className="text-2xl font-bold tracking-tighter mb-[20px] md:text-5xl text-center text-chipo-heading">
          {heading}
        </h2>
        <div className="message">{message}</div>
        <div className="divider mt-2 md:hidden" />
        <div className="mt-8 md:mt-[90px] md:flex gap-[20px] justify-center">
          {mockData.map((item, idx) => (
            <div key={idx} className="mt-8 md:mt-0 text-center">
              <div className="md:h-[110px] relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="sm:w-[98px] sm:max-h-[110px] m-auto"
                />

                <FaChevronRight className="rotate-90 md:rotate-0 text-center m-auto mt-4 md:mt-0 md:absolute top-[50%] right-[15px] text-2xl font-light" />
              </div>

              <div className="pt-4 md:pt-[60px] pb-[8px] font-semibold sm:text-[26px] text-chipo-heading">
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
