import React from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from "next/link";


const Header = () => {
    
  return (
    <header className="bg-white py-4 drop-shadow-md">
      <div className="flex max-w-7xl justify-between mx-auto px-4 items-center">
        <div>
          <span className="font-bold text-xl cursor-pointer ml-2">
            Ecommerce{" "}
            <span className="text-pink-500 font-bold">MarketPlace</span>
          </span>
        </div>
        <div className=" hidden sm:flex flex-row space-x-4">
          <p>Offers</p>
          <p>Products</p>
          <p>Deals</p>
        </div>
        <div className="flex space-x-4 items-center">
          <button className="hidden md:inline-block text-pink-500 border-2 border-pink-500 px-4 rounded hover:bg-pink-50 ">Your Cart</button>
          <Link href="/cart">
            <ShoppingCartIcon  class="h-6 w-6 text-gray-500" />
          </Link>
          <h1>
          <Link href="/signin">Sign In/Log Out</Link>
          </h1>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
