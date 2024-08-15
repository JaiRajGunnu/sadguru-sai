import Navbar from "./Navbar";
import WrapperVP from "./WrapperVP";
import Footer from "../home/footer";
import NetworkStatus from "../home/NetworkStatus";
const page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-[#0f1014] text-white">
      <Navbar />
      <WrapperVP />
      <Footer/>
      <NetworkStatus/>
    </div>
  );
};

export default page;
