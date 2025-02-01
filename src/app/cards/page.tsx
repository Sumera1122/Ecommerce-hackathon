import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Icards {
  
    image: string;
    detail: string;
    id: number;
    description:string,
  }
  
  const card: Icards[] = [
    {
      image: "/images/makeup1.jpg",
      detail: "Makeup Products",
      description:"you can find all you want",
      id: 1,
    },
    {
      image: "/images/clothes.webp",
      detail: "Get Dressed",
      description:"you can find all you want",
      id: 2,
    },
    {
      image: "/images/shoes.webp",
      detail: "Stylish Shoes",
      description:"you can find all you want",
      id: 3,
    },
  ];
  
  const Card_list = () => {
    return (
      <div className="w-full md:w-[90%] mx-auto p-4 grid grid-cols-1 max-sm:gap-4 max-md:grid-cols-2 md:mt-10 md:grid-cols-3 gap-6">
        {card.map((data) => {
          return (
            <div
              key={data.id}
              className="border rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 cursor-pointer"
            >
                <Link href={`/cards/${data.id}`}>
                <Image
                src={data.image}
                alt={data.detail}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
            </Link>

              <p className="mt-4 text-lg font-medium text-center">{data.detail}</p>
            </div>
          );
        })}
      </div>
    )
  };
  
  export default Card_list;
  