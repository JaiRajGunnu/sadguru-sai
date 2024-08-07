import Modal from "./Modal";

const Video = () => {
  return (
    <div className="flex items-center justify-center rounded-2xl mt-[-10%] md:mt-0 lg:mt-0 relative flex-col">
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/988516345" 
        className="h-[260px] w-full md:h-[380px] lg:h-[500px] "
        allowFullScreen
        allow="fullscreen"
      ></iframe>

    </div>
  );
};

export default Video;
