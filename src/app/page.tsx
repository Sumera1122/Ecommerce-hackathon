"use client"


import Card_list from "./cards/page";
import Hero from "./components/hero";
import Fonts from "./components/fonts";
import Link from "next/link";
import ProductList from "./productlist/page";


export default function Home() {
  return (
    <div>
  
      <Hero/>
      <Fonts/>
      <Card_list/>
    
     <div className="flex flex-col md:flex-row gap-4 md:w-[90%] md:m-auto md:mt-[30px] ">
      <div className="w-full md:w-1/4 md:h-full md:ml-[20px]  md:mt-[20px] md:border border-black p-10">
   <ul className="space-y-2 md:space-y-[40px] md:mx-auto  ">
       <li  className="w-full h-[60px] bg-blue-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">All</Link></li>
       <li  className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">Beauty</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">Fragrances</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">Menshoes</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">Skincare</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">Stiched</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">T-shirts</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">Unstitched</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">Watches</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="#" className="flex  justify-center items-center p-4">Womenshoes</Link></li>
    </ul>
  </div>
     
  
  <div className="w-full">
    <ProductList/>
    
  </div>
</div>
<div>

    </div>
  

  










      

    </div>
  );
}






















/* <div className="w-full md:w-1/4 md:h-full md:ml-[20px]  md:mt-[20px] md:border border-black p-10">
   <ul className="space-y-2 md:space-y-[40px] md:mx-auto  ">
       <li  className="w-full h-[60px] bg-blue-200 text-black  md:text-xl font-normal"><Link href="src/app/(addtocart)/beauty.tsx" className="flex  justify-center items-center p-4">All</Link></li>
       <li  className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="/(addtocart)/beauty.tsx" className="flex  justify-center items-center p-4">Beauty</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="/(addtocart)/fragrances.tsx" className="flex  justify-center items-center p-4">Fragrances</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="src/app/(addtocart)/menshoes.tsx" className="flex  justify-center items-center p-4">Menshoes</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="src/app/(addtocart)/skincare.tsx" className="flex  justify-center items-center p-4">Skincare</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="src/app/(addtocart)/stitched.tsx" className="flex  justify-center items-center p-4">Stiched</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="src/app/(addtocart)/tshirts.tsx" className="flex  justify-center items-center p-4">T-shirts</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="src/app/(addtocart)/unstitched.tsx" className="flex  justify-center items-center p-4">Unstitched</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="src/app/(addtocart)/watches.tsx" className="flex  justify-center items-center p-4">Watches</Link></li>
      <li className="w-full h-[60px] bg-gray-200 text-black  md:text-xl font-normal"><Link href="src/app/(addtocart)/womenshoes.tsx" className="flex  justify-center items-center p-4">Womenshoes</Link></li>
    </ul>
  </div>*/