
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <main className="md:w-[90%] w-full flex flex-col md:flex-row items-center md:items-start">
      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-start">
        <Image 
          src="/images/images.png" 
          alt="image" 
          width={926} 
          height={426} 
          className="w-full max-w-[150px] md:max-w-[926px] h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left p-4 md:p-8 md:mt-60">
        <h1 className="text-xl md:text-4xl font-bold mb-4">
          Find Everything Here That Styles Your Style
        </h1>
        <p className="mb-4 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia alias architecto error odio natus, ea esse?
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-lime-600 transition"> <Link href="/productlist"> Shop Now</Link>
       
        </button>
      </div>
    </main>
  );
};

export default Hero
