import WrapperVP from "./home/WrapperVP";
import Navbar from "./home/Navbar";
import Footer from "./home/footer";
import NetworkStatus from "./home/NetworkStatus";
export default function Home() {
  return (
    <main className="flex min-h-svh flex-col gap-2 bg-[#0f1014]  text-white">
       <Navbar  />
       <WrapperVP />
       <Footer />
       <NetworkStatus/>
    </main>
  );
}
