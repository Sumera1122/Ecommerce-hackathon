"use client"
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Icards {
  image: { url: string, link: string }[],  
  detail: string,
  description: string,
  id: number,
}

const card: Icards[] = [
  {
    image: [
      { url: "/images/mab1.jpg", link: "https://www.makeupcityshop.com/" },
      { url: "/images/makeup1.jpg", link: "https://www.makeupcityshop.com/" },
      { url: "/images/makeup.webp", link: "https://www.makeupcityshop.com/" },
    ],
    detail: "Makeup brands",
    description: "Explore premium brands like St. London, Maybelline, and BBA, along with an extensive collection of vibrant nail colors and beauty essentials.",
    id: 1,
  },
  {
    image: [
      { url: "/images/l3.jpg", link: "https://www.limelight.pk/" },
      { url: "/images/gulahmed.jpg", link: "https://www.gulahmedshop.com/unstitched-fabric?gad_source=1" },
      { url: "/images/clothes.webp", link: "https://www.chunri1.com/" },
      { url: "/images/al1.jpg", link: "https://almirah.com.pk/?srsltid=AfmBOorDX4GrJJoKxS_Jn2IKra_dfguDIIBk5ACwkrhIE2W8GJGm5dTk" },
      { url: "/images/j1.jpg", link: "https://www.junaidjamshed.com/" },
    ],
    detail: "Style your Style",
    description: "Shop stylish and elegant collections from top brands like Almirah, J. by Gul Ahmed, Limelight, Saya, and more, offering a blend of traditional and contemporary fashion for every occasion.",
    id: 2,
  },
  {
    image: [
      { url: "/images/1ststep1.jpg", link: "https://1ststep.pk/" },
      { url: "/images/bata1.jpg", link: "https://www.bata.com.pk/" },
      { url: "/images/indu1.jpg", link: "https://www.ndure.com/" },
      { url: "/images/shoes.webp", link: "https://servis.pk/" },
    ],
    detail: "Foot Wear",
    description: "Discover a wide selection of footwear from renowned brands like Bata, Service, 1st Step, and Endure, offering comfort, style, and durability for every step you take.",
    id: 3,
  },
];

const CardsDetail = () => {
  const params = useParams();
  const id = params.id;
  const item = card.find((item) => item.id === Number(id));

  if (!item) {
    return <h2 className="text-center text-xl font-semibold text-red-500">Card not found</h2>;
  }

  return (
    <div className="max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center sm:text-left">{item.detail}</h1>
        <p className="mt-2 text-gray-600 text-base">{item.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {item.image.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Link href={image.link}>
                <Image 
                  src={image.url} 
                  alt={`${item.detail} image ${index + 1}`} 
                  width={400} 
                  height={300} 
                  className="contain "
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Image {index + 1}</h3>
                <p className="mt-2 text-sm text-gray-500">Click to view more details</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsDetail;
