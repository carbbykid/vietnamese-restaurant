import { Dispatch, SetStateAction, useRef, useState } from "react";
import { FaRegWindowClose, FaSpinner } from "react-icons/fa";

type ModalVideo = {
  setActiveModal: Dispatch<SetStateAction<boolean>>;
  activeModal: boolean;
};

const ModalVideo = ({
  activeModal,
  setActiveModal,
}: ModalVideo): JSX.Element => {
  const [videoLoading, setVideoLoading] = useState(true);
  const ref = useRef<HTMLIFrameElement>(null);

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const handleClose = () => {
    setActiveModal(false);
    if (ref.current?.contentWindow) {
      // Pause Youtube Videos
      if (ref.current.src.startsWith("https://www.youtube.com")) {
        ref.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*",
        );
      }

      // Pause Vimeo Videos
      if (ref.current.src.startsWith("https://player.vimeo.com/")) {
        ref.current.contentWindow.postMessage('{"method":"pause"}', "*");
      }
    }
  };

  return (
    <div className="wrap absolute z-[100]">
      <div
        className={`fixed w-full h-full top-0 left-0 bottom-0 bg-black bg-opacity-80 ease-in duration-200 ${
          activeModal ? "visible opacity-1" : "invisible opacity-0"
        }`}
        onClick={handleClose}
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="m-auto">
            <div onClick={handleClose}>
              <FaRegWindowClose
                arial-label="Close modal"
                className="text-white text-3xl m-auto ease-in duration-200 hover:text-black"
              />
            </div>
            <div className="modal_video">
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease-in duration-200 ${
                  videoLoading ? "block" : "hidden"
                }`}
              >
                <FaSpinner className="text-white text-3xl" />
              </div>

              <iframe
                ref={ref}
                className="modal__video"
                onLoad={spinner}
                loading="lazy"
                src="https://player.vimeo.com/video/142705963?enablejsapi=1"
                title="Vimeo video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
