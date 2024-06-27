import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 w-[90%] mx-auto">
      <div className="flex gap-5 items-center">
        <img src="/images/SINC.png" alt="Sinc logo" className="w-24 h-auto" />
        <div className="hidden lg:flex gap-[12px] items-center font-medium text-[18px] _hover:underline">
          <Link href="#">About</Link>
          <Link href="#">SIP</Link>
          <Link href="#">Studio</Link>
          <Link href="#">SEEQ</Link>
          <Link href="#">Platforms</Link>
          <Link href="#">Initiatives</Link>
          <Link href="#">More</Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-[10px] text-[16px] font-semibold">
        <button className="bg-[#20888F] px-[20px] py-[12px] rounded-full text-white">
          SINC With Us
        </button>
        <button className="bg-[#303030] px-[20px] py-[12px] rounded-full text-white">
          Apply to SIP 1.0
        </button>
      </div>
      <div className="lg:hidden">
        <button
          // className="t font-semibold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMenu size={40} />
        </button>
        {menuOpen && (
          <div className="absolute top-16 right-0 bg-white shadow-md rounded-lg p-4">
            <Link href="#" className="block py-2">
              About
            </Link>
            <Link href="#" className="block py-2">
              SIP
            </Link>
            <Link href="#" className="block py-2">
              Studio
            </Link>
            <Link href="#" className="block py-2">
              SEEQ
            </Link>
            <Link href="#" className="block py-2">
              Platforms
            </Link>
            <Link href="#" className="block py-2">
              Initiatives
            </Link>
            <Link href="#" className="block py-2">
              More
            </Link>
            <button className="bg-[#20888F] w-full mt-4 px-[20px] py-[12px] rounded-full text-white">
              SINC With Us
            </button>
            <button className="bg-[#303030] w-full mt-4 px-[20px] py-[12px] rounded-full text-white">
              Apply to SIP 1.0
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
