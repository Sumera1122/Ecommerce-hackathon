import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white  md:w-[90$] p-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* Footer Column 1 - Shop Co */}
        <div>
          <h2 className="text-[18px] font-semibold mb-4 text-pink-300 md:w-[90%]">Shop Co</h2>
          <p className="text-[16px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad?</p>
          <div className="flex space-x-4 text-pink-300">
            <a href="https://wa.me/03312156555" className="text-xl hover:text-gray-400"><FaWhatsapp /></a>
            <a href="mailto:sumeramushtaque993@gmail.com" className="text-xl hover:text-gray-400"><CgMail /></a>
            <a href="https://www.linkedin.com/in/sumera-mushtaque-7759bb1b5/" className="text-xl hover:text-gray-400"><CiLinkedin /></a>
          </div>
        </div>

        {/* Footer Column 2 - Company Links */}
        <div>
          <h2 className="text-[18px] font-semibold mb-4 text-pink-300">Company</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link href="/newarrivals" className="hover:text-gray-400">New Arrivals</Link></li>
            <li><Link href="/cards" className="hover:text-gray-400">Brands</Link></li>
          </ul>
        </div>

        {/* Footer Column 3 - Brands */}
        <div>
          <h3 className="text-[18px] font-semibold mb-4 text-pink-300">Brands</h3>
          <ul className="space-y-2">
            <li>Gulahmed</li>
            <li>Mabeline</li>
            <li>J.</li>
            <li>Indure</li>
            <li>Others</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t pt-4">
        <p>&copy; 2025 Shop Co. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
