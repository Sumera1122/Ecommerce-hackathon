
import { Playfair_Display, Cinzel, Bodoni_Moda, Prata, Montserrat } from "next/font/google";
import React from "react";

// Font configurations
const Playfair = Playfair_Display({ subsets: ["latin"] });
const Cinze = Cinzel({ subsets: ["latin"] });
const Bodoni = Bodoni_Moda({ subsets: ["latin"] });
const Prat = Prata({ subsets: ["latin"], weight: "400" });
const Monts = Montserrat({ subsets: ["latin"] });

const Fonts = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto md:p-6  max-sm:px-3 flex font-extrabold md:font-black md:gap-16 max-sm:mt-10  gap-4 items-center bg-black text-white">
      {/* Individual Headings with Font Classes */}
      <h1 className={`${Playfair.className} text-3xl md:text-5xl max-sm:text-[10px]`}>
        GulAhmed
      </h1>
      <h1 className={`${Cinze.className} text-3xl md:text-5xl max-sm:text-[10px]`}>
        Saya
      </h1>
      <h1 className={`${Bodoni.className} text-3xl md:text-5xl max-sm:text-[10px]`}>
        Maybelline
      </h1>
      <h1 className={`${Prat.className} text-3xl md:text-5xl max-sm:text-[10px]`}>
        Service
      </h1>
      <h1 className={`${Monts.className} text-3xl md:text-5xl max-sm:text-[10px]`}>
        Unzay
      </h1>
    </div>
  );
};

export default Fonts;
