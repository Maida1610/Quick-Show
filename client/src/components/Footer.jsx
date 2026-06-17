import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-gray-300 bg-[#09090B]">

      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-10">

        {/* Left Section */}
        <div className="md:max-w-96">
          <img
            className="h-9"
            src={assets.logo}
            alt="logo"
          />

          <p className="mt-6 text-sm leading-6">
            Book your favorite movie tickets
            with ease. Watch trailers,
            discover movies and reserve
            your seats instantly.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <img
              src={assets.googlePlay}
              alt=""
              className="h-10 cursor-pointer"
            />

            <img
              src={assets.appStore}
              alt=""
              className="h-10 cursor-pointer"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="font-semibold text-white mb-5">
            Quick Links
          </h2>

          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:text-white">
              Home
            </li>

            <li className="cursor-pointer hover:text-white">
              Movies
            </li>

            <li className="cursor-pointer hover:text-white">
              Theaters
            </li>

            <li className="cursor-pointer hover:text-white">
              Favorite
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="font-semibold text-white mb-5">
            Contact Us
          </h2>

          <div className="text-sm space-y-2">
            <p>support@quickshow.com</p>
            <p>+92 308 0702803</p>
            <p>Punjab, Pakistan</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-5 text-center text-sm text-gray-500">
        Copyright 2026 © QuickShow.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;