import { useState } from "react";
import { FaRegWindowClose, FaSpinner, FaRegPlayCircle } from "react-icons/fa";

const ModalVideo = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div className="wrap">
      <button
        onClick={openModal}
        className="flex m-auto items-center py-2 px-8 text-[16px] sm:text-[27px] text-white rounded-[60px] bg-chipo-blue ease-in duration-300 hover:bg-chipo-text sm:px-10"
      >
        Play <FaRegPlayCircle className=" text-[16px] sm:text-[27px] mx-2" />
        video
      </button>
      <div
        className={`fixed w-full h-full top-0 left-0 bottom-0 bg-black bg-opacity-80 ease-in duration-200 ${
          modal ? "visible opacity-1" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="m-auto">
            <div
              onClick={() => {
                setModal(false);
                setVideoLoading(true);
              }}
            >
              <FaRegWindowClose
                arial-label="Close modal"
                className="text-white text-3xl m-auto ease-in duration-200 hover:text-black"
              />
            </div>
            <div className="modal_video">
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease-in duration-200 ${
                  videoLoading ? "visible" : "invisible"
                }`}
              >
                <FaSpinner className="text-white text-3xl" />
              </div>

              <iframe
                className="modal__video"
                onLoad={spinner}
                loading="lazy"
                width="800"
                height="500"
                src="https://player.vimeo.com/video/142705963"
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
