import Video from "./Video";
import Payment from "./Payment";

const WrapperVP = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:gap-2 lg:flex-row lg:gap-4 ">
      <div className="h-[270px] w-full md:h-[400px] md:mb-[5rem] ">
        <Video />
        
      </div>
  
      <div className="bg-[#1F1F1F] rounded-2xl flex flex-col items-center shadow-wlrd justify-center p-2 font-poppins text-xl w-full mt-[10%] md:mt-0 md:p-4 md:w-[85%] lg:w-[450px] lg:h-[520px] lg:scale-95 lg:mt-[-1%] lg:p-18 lg:mr-[6%]">
        <Payment />
      </div>

    </div>
  );
};

export default WrapperVP;
