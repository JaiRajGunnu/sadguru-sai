import Navbar from "./Navbar";
import WrapperVP from "./WrapperVP";
import Footer from "../home/footer";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-gradient-to-b from-[#101115] to-[#171819] text-white">
      <Navbar />
      <WrapperVP />
      <Footer/>
    </div>
  );
};

export default page;
