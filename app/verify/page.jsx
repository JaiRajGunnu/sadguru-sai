import Navbar from "../payment/Navbar";
import Footer from "../home/footer";
import Gform from "./Gform";
import NetworkStatus from "../home/NetworkStatus";
const page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-[#0f1014] text-white ">
      <Navbar />
      <Gform />
     <Footer/> 
     <NetworkStatus/>
    </div>
  )
}

export default page;
