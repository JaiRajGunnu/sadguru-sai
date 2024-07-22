import Video from "./Video";
import Payment from "./Payment";

const WrapperVP = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 lg:flex-row lg:gap-1 md:gap-2">
      <div className="h-[270px] w-full md:h-[400px] md:mb-[5rem] mb-[4rem]">
        <Video />
        
      </div>
      {/* <p>Hemanth</p> */}

      <div className="bg-[#1F1F1F] rounded-2xl flex flex-col items-center shadow-wlrd  justify-center p-2 font-poppins text-xl w-full md:w-[85%] md:p-4 lg:w-[450px] lg:h-[495px] lg:p-18 lg:mr-[8%]">

        <Payment />
      </div>

    </div>
  );
};

export default WrapperVP;
