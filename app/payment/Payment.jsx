import Link from "next/link";
const Payment = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center lg:py-1 lg:px-0 m-3 ">
      <p className="font-hso text-2xl  ml-10 mr-10 text-center md:text-[25px] ld:text-[25px] lg:ml-20 leading-8 lg:w-full lg:text-left ">
        Subscribe & dive up ultimtely ..
      </p>
      <div className="mt-3 items-center justify-center flex-col gap-2 ">
        <ul className="text-sm list-disc flex flex-col gap-1.5 font-poppins ml-[-5%] ">
          <p className="text-xs opacity-75">Video & Sound Quality</p>
          <p className="text-base">High Standard</p>
          <hr className="text-white opacity-30"></hr>
          <p className="text-xs opacity-75">Resolutions</p>
          <p className="text-base">Full HD & HD</p>
          <hr className="text-white opacity-30"></hr>
          <p className="text-xs opacity-75">Epsiodes from</p>
          <p className="text-base">27th July 2020 - Season 01</p>
          <hr className="text-white opacity-30"></hr>
          <p className="text-xs opacity-75">Video & Sign Lanugage</p>
          <p className="text-base">తెలుగు (Telugu)</p>
          <hr className="text-white opacity-30"></hr>{" "}
        </ul>
        <div className="flex flex-col gap-4 mt-6">
          <Link
            href={"https://amzn.to/4d8hpQ8"}
            className="flex items-center justify-center  font-poppins font-bold text-md scale-90 hover:scale-100"
            rel="noopener noreferrer"
            target="_blank">
            <button className="relative inline-flex rounded-xl items-center px-4 py-2  bg-[#101115]  text-white text-lg hover:delay-75">
              <span className="absolute top-0 right-0 scale-80 -mt-2 -mr-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full ">
                {" "}
                40% OFF{" "}
              </span>
              Pay ₹ 99 / Monthly
            </button>
          </Link>

          <Link
            href={"https://amzn.to/4d8hpQ8"}
            className="flex items-center justify-center  font-poppins font-bold text-md scale-90 hover:scale-100"
            rel="noopener noreferrer"
            target="_blank">
            <button className="relative inline-flex rounded-xl items-center px-4 py-2  bg-[#4b077b]  text-white text-lg hover:delay-75">
              <span className="absolute top-0 right-0 scale-80 -mt-2 -mr-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full ">
                {" "}
                50% OFF{" "}
              </span>
              Pay ₹ 249 / Quaterly
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
