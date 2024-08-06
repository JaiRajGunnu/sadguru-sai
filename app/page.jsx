import WrapperVP from "./home/WrapperVP";
import Navbar from "./home/Navbar";
import Footer from "./home/footer";
export default function Home() {
  return (
    <main className="flex min-h-svh flex-col gap-2 bg-gradient-to-b from-[#101115] to-[#171819] text-white">
       <Navbar  />
       <WrapperVP />
       <Footer />
    </main>
  );
}
