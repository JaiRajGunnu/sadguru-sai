import Link from "next/link";
import { CircleCheckBig } from 'lucide-react';

const Payment = () => {
  return (
    <div className="flex flex-col gap-2 scale-100 items-center justify-center lg:py-1 lg:px-0 m-3  ">
      <p className="font-hso text-2xl  ml-10 mr-12 text-center md:text-[25px] lg:text-[25px] lg:ml-20 leading-8 lg:w-full lg:text-left ">
        Subscribe & dive up ultimtely ..
      </p>
      <div className="mt-3 items-center justify-center flex-col gap-2 ">
        <ul className="text-sm list-disc flex flex-col gap-1.5 font-poppins ml-[5%] ">
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
        <div className="flex flex-col gap-4 mt-6 w-[300px]">
          <Link
            href={"https://amzn.to/4d8hpQ8"}
            className="flex items-center justify-center font-poppins font-bold text-md scale-90 hover:scale-100 transition-all duration-200 delay-100 hover:opacity-80"
            rel="noopener noreferrer"
            target="_blank">
            <button className="relative inline-flex rounded-xl items-center px-14 py-2 w-full bg-[#101115]  text-white text-lg ">
              <span className="absolute top-0 right-0 scale-80 -mt-2 -mr-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full ">
                {" "}
                40% OFF{" "}
              </span>
              Pay ₹ 59 / Monthly
            </button>
          </Link>

          <Link
            href={"https://amzn.to/4d8hpQ8"}
            className="flex items-center justify-center font-poppins font-bold text-md scale-90 hover:scale-100 transition-all duration-200 delay-100 hover:opacity-80"
            rel="noopener noreferrer"
            target="_blank">
            <button className="relative inline-flex rounded-xl items-center px-14 py-2 w-full bg-[#4b077b]  text-white text-lg delay-700">
              <span className="absolute top-0 right-0 scale-80 -mt-2 -mr-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full ">
                {" "}
                50% OFF{" "}
              </span>
              Pay ₹ 149 / Quaterly
            </button>
          </Link>
      <div className="flex text-center justify-center items-center group ">
      <div className="flex items-center scale-100 group-hover:scale-110 transition-all duration-300">
        <Link
          href={"http://localhost:3000/verify"}
          className="text-sm text-white opacity-40  hover:underline mr-2 group-hover:text-[#fff] group-hover:opacity-100 transition-colors duration-300 " >
          Verify payment
        </Link>
        <CircleCheckBig size={12}
        className="text-white opacity-40 scale-100 group-hover:text-green-500 group-hover:opacity-100  transition-colors duration-300" />
    </div>
    </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;
