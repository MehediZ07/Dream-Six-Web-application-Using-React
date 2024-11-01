import React from "react";
import logo from "../../../assets/logo.png";
import "./Navbar.css";
export default function Navbar({ count }) {
  return (
    <div className="w-[90%] 2xl:max-w-[1440px] mx-auto flex justify-between py-6 fixed top-0 z-[1000] bg-[#ffffff] bg-opacity-50 backdrop-blur-sm">
      <div>
        <img
          alt="Tailwind CSS Navbar component"
          className="max-h-12"
          src={logo}
        />
      </div>
      <div className="flex items-center gap-6">
        <div class="style-hidden">
          <ul className="flex gap-4 font-semibold">
            <li className="cursor-pointer">
              <a>Home</a>
            </li>
            <li className="cursor-pointer">
              <a>Fixture</a>
            </li>
            <li className="cursor-pointer">
              <a>Teams</a>
            </li>
            <li className="cursor-pointer">
              <a>Schedule</a>
            </li>
          </ul>
        </div>
        <div className="border p-2 solid border-gray-300 rounded-lg bg-gray-100">
          <p className="cursor-pointer font-semibold text-xl">
            <span className="text-base">{count}</span> Coin{" "}
            <i class="fa-solid fa-coins text-[#FFCC00]"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
