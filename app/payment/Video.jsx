import Modal from "./Modal";

const Video = () => {
  return (
    <div className="flex items-center justify-center rounded-2xl mt-[-10%] md:mt-0 lg:mt-0 relative flex-col">
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/988519464"
        className="h-[260px] w-full md:h-[380px] lg:h-[495px] "
        allowFullScreen
        allow="fullscreen"
      ></iframe>
      <div className="w-full h-full p-3 md:p-7 lg:p-5  font-poppins flex items-center justify-center lg:justify-around">
        <p className="font-hso hidden  lg:text-3xl lg:block lg:ml-[-3%] ">Sadguru Sai - Sample Video Content        </p>
        <Modal />
      </div>
    </div>
  
  );
};

export default Video;
