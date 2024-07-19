import Navbar from "./Navbar";
import WrapperVP from "./WrapperVP";


const page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-[#0F1014] text-white">
      <Navbar />
      <WrapperVP  />
    </div>
  )
}

export default page ;
