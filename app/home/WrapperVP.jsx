import Video from "./Video";
import Payment from "./Payment";
import Modal from "./Modal";
const WrapperVP = () => {
  return (
    <div className="flex flex-col p-3 lg:flex-row lg:gap-5 items-center justify-center gap-4">
      <div className="h-[270px] w-full md:h-[400px] lg:h-[500px] p-2 mb-28" >
        <Video />
        <div className="w-full h-full p-4 font-poppins flex items-center flex-col gap-4 lg:items-start lg:flex-row lg:justify-between">
          <p className="font-hso text-2xl relative top-[-10%] md:flex md:top-0 lg:top-0 md:text-3xl lg:static lg:ml-[5%] lg:mt-2 lg:text-3xl">Sadguru Sai Trailer - Telugu</p>
          <Modal />
        </div>
      </div>

      <div className="bg-[#1F1F1F] rounded-2xl flex items-center shadow-wlrd justify-center mr-0 p-2 lg:mr-[6%] font-poppins text-xl w-full md:w-[85%] md:p-4 lg:w-[450px] lg:h-[420px] lg:p-7 mt-[-6%] ">
        <Payment  />
      </div>
    </div>
  );
};

export default WrapperVP;
