import WrapperVP from "./home/WrapperVP";
import Navbar from "./home/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-2 bg-gradient-to-b from-[#101115] to-[#171819] text-white">
       <Navbar  />
       <WrapperVP />
    </main>
  );
}
