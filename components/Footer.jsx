import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-300">
        {/* Logo and Description */}
        <div className="w-full md:w-2/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="GreatStack Logo" />
          <p className="mt-6 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-gray-900 mb-5">Company</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline transition" aria-label="Home">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline transition" aria-label="About us">About us</a>
            </li>
            <li>
              <a href="#" className="hover:underline transition" aria-label="Contact us">Contact us</a>
            </li>
            <li>
              <a href="#" className="hover:underline transition" aria-label="Privacy policy">Privacy policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-gray-900 mb-5">Get in touch</h2>
          <address className="not-italic text-sm space-y-2">
            <p>📞 +1-234-567-890</p>
            <a href="mailto:contact@greatstack.dev" className="hover:underline">
              ✉️ contact@greatstack.dev
            </a>
          </address>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="py-4 text-center text-xs md:text-sm text-gray-400">
        &copy; 2025 <span className="font-medium text-gray-600">GreatStack.dev</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
