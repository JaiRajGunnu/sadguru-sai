import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center w-full font-poppins p-0 md:p-2 rounded-b-lg bg-[#101115]">
      <Link href="./">
        <div className="w-[150px] m-5 flex items-center justify-center">
          <Image
            src="/tvljsol.png"
            alt="Logo"
            width={150}
            height={150} // Adjust based on the aspect ratio of your image
          />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
