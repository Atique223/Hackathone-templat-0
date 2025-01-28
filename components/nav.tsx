import Link from "next/link";
import React from "react";
import { HiOutlineUser } from "react-icons/hi2"
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import { LuSearch } from "react-icons/lu"

const Navbar = () => {
  return (
    <nav className=" bg-[#FBEBB5] px-4 py-4 shadow-md w-full " >
      <div className=" max-w-6xl mx-auto  flex justify-between items-center">
        {/* Left Section - Logo */}
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="logo" className="h-[70px] w-[70px]" />
          </Link>
        </div>

        {/* Center Section - Links */}
        <ul className="hidden md:flex space-x-16 absolute right-96 text-black font-medium">
          <li className="hover:text-gray-600 cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-gray-600 cursor-pointer"><Link href="/shop">Shop</Link></li>
          <li className="hover:text-gray-600 cursor-pointer"><Link href="/blog">Blog</Link></li>
          <li className="hover:text-gray-600 cursor-pointer"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Right Section - Icons */}
        <div className="flex space-x-6 text-black">
        <Link href="/account"><HiOutlineUser className="text-lg cursor-pointer hover:text-gray-600" /></Link>
          <LuSearch className="text-lg cursor-pointer hover:text-gray-600" />
          <AiOutlineHeart className="text-lg cursor-pointer hover:text-gray-600" />
          <Link href="/cart">
          <AiOutlineShoppingCart className="text-lg cursor-pointer hover:text-gray-600" /></Link>
        </div>
      </div>

      {/* Mobile Menu - Only Visible on Small Screens */}
      <div></div>
      
      <div className="block md:hidden mt-4">
        <ul className="flex flex-col items-center space-y-4 text-black font-medium">
          <li className="hover:text-gray-600 cursor-pointer">Home</li>
          <li className="hover:text-gray-600 cursor-pointer">Shop</li>
          <li className="hover:text-gray-600 cursor-pointer">Blog</li>
          <li className="hover:text-gray-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;