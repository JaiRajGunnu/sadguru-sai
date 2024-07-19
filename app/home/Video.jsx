
const Video = () => {
  return (
    <div className="flex items-center justify-center rounded-2xl flex-col">
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/980837824?h=244ca2fef7"
        className="h-[260px] w-full md:h-[380px] lg:h-[500px] "
      ></iframe>
      <div className="w-full h-full px-20 p-6 opacity-100 sd:opacity-0 font-poppins font-medium text-3xl">
        <p className="font-hso">Sadguru Sai Trailer - Telugu</p>
      </div>
    </div>
  );
};

export default Video;
