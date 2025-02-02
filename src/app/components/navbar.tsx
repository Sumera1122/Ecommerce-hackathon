
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { UserButton } from "@clerk/nextjs";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Dropdown from "./dropdown";
import Link from "next/link";


const Navbar = () => {
  
  return (
    <main className=" flex justify-evenly items-center w-full md:w-[90%] py-2 mx-auto md:px-10">
      <div className=" flex-1">
        <h1 className="font-extrabold md:text-2xl">SHOP.CO</h1>
      </div>

      <div className=" flex-1 flex justify-between items-center max-sm:hidden">
        <Link href="/">Home</Link>
        <h2> <Dropdown /></h2>
        <Link href="/about">About</Link>
        <Link href="/newarrivals">New Arrivals</Link>
        <Link href="/cards">Brands</Link>

      </div>



      <div className=" flex-1 w-[40px] flex  border rounded-full relative md:ml-40 max-sm:hidden max-md:hidden">
        <IoIosSearch className=" absolute top-1 left-1 " />
        <input type="text" placeholder="search here" className="ml-6 " /></div>
      <FiShoppingCart className="inline-block mr-2 font-extrabold" />
      <UserButton  />
      




      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <LuMenu />
          </SheetTrigger>
          <SheetContent >
            <SheetHeader>
              <SheetTitle>Explore more About</SheetTitle>
              <SheetDescription>

                <Link href="/">Home</Link>
                <Dropdown />
                <Link href="/about">About</Link>
                <Link href="/newarrivals">New Arrivals</Link>
                <Link href="/cards">Brands</Link>
                <UserButton />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>




    </main>
  );
};

export default Navbar;
