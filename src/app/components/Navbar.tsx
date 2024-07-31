import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    const iconClass = "w-[50px] h-[50px] flex justify-center items-center bg-[#F4F4FF] rounded-md";

  return (
    <div className="flex justify-between  items-center h-[120px] mb-[40px]">
      <Image src="/logo.png" alt="" width={60} height={39} />
      {/* Search Input */}

      <div className="flex p-2 bg-[#F4F4FF] items-center rounded-xl md:w-[50%]">
      <Search width={16} height={16} color="#09093740"/>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none ml-1"
        />
      
      </div>
      {/* ICONS */}
      <div className="flex gap-[16px]">
        <span className={iconClass}>
          <User />
        </span>
        <span className={iconClass}>
          <Heart />
        </span>
        <span className={iconClass}>
          <ShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
