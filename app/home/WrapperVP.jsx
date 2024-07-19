import Video from "./Video";
import Payment from "./Payment";
const WrapperVP = () => {
  return (
    <div className="flex flex-col p-5 lg:flex-row lg:gap-5 items-center justify-center">

      <div className="h-[270px] w-full md:h-[400px] lg:h-[500px] p-2">
        <Video />
      </div>
 
      <div className="bg-[#1F1F1F] rounded-2xl flex items-center shadow-wlrd justify-center p-2 mr-[5%] font-poppins text-xl w-full md:w-[85%] md:p-4 lg:w-[450px] lg:h-[495px] lg:p-9">
        <Payment  />
      </div>
    </div>
  );
};

export default WrapperVP;
