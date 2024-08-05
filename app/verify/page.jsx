import Navbar from "../payment/Navbar";
import Footer from "../home/footer";
import Gform from "./Gform";
const page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-gradient-to-b from-[#101115] to-[#171819] text-white">
      <Navbar />
      <Gform />
      <Footer/>
    </div>
  )
}

export default page;
