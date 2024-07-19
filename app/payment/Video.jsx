import Modal from "./Modal";

const Video = () => {
  return (
    <div className="flex items-center justify-center rounded-2xl flex-col md:gap-1">
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/851958974?h=244ca2fef7"
        className="h-[260px] w-full md:h-[380px] lg:h-[495px] "
      ></iframe>
      <div className="w-full h-full p-3 md:p-7 lg:p-5  font-poppins flex items-center justify-center lg:justify-around">
        <p className="font-hso hidden  lg:text-3xl lg:block ">Tutorial video to make subscription payment</p>
        <Modal  />
      </div>
    </div>
  
  );
};

export default Video;
