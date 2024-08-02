import Navbar from "./Navbar";
import WrapperVP from "./WrapperVP";
import Footer from "../home/footer";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-gradient-to-b from-[#101115] to-[#171819] text-white">
      <Navbar />
      <WrapperVP />

      <div className="relative p-4 m-4">
        <div className="absolute bottom-0 left-0 right-0 md:left-40 lg:top-[230%] lg:right-[10%]">
        <footer className= "text-white font-poppins font-thin opacity-60 py-4">
      <div className="container mx-auto text-center tracking-wide">
        <p className="text-xs ">
        © Copyrights 2024  <span className='tracking-widest p-2'>  |  </span> An TVLJ Solutions venture for Sadguru Sai Telugu. 
        </p>
      </div>
    </footer>
        </div>
      </div>
    </div>
  );
};

export default page;
