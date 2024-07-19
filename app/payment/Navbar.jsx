import { Button } from "@/components/ui/button";
import Link from "next/link";
import { House } from "lucide-react";
const Navbar = () => {
  return (
      <nav className="flex justify-center w-full font-poppins p-0 md:p-2 rounded-b-lg bg-[#101115]">        
      <Link href={"./"}><img className="w-[150px] m-5 items-center justify-center" src="/tvljsol.png"/></Link>
        </nav>  );
};

export default Navbar;
