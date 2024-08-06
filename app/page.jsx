import WrapperVP from "./home/WrapperVP";
import Navbar from "./home/Navbar";
import Footer from "./home/footer";
export default function Home() {
  return (
    <main className="flex min-h-svh flex-col gap-2 bg-[#0f1014]  text-white">
       <Navbar  />
       <WrapperVP />
       <Footer />
       
    </main>
  );
}
