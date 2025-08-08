import React from 'react';
import { CiBellOn } from "react-icons/ci";

const NavBar = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm">
     <div className="container mx-auto flex justify-between items-center w-full">

        {/* Left - Logo */}
        <div>
          <a className="btn btn-ghost text-xl">
            <span className="text-blue-600">Auction</span>
            <span className="text-yellow-400">Gallery</span>
          </a>
        </div>

        {/* Center - Navigation Buttons */}
        <div className="flex space-x-2">
          <button className="btn btn-ghost">Home</button>
          <button className="btn btn-ghost">Auctions</button>
          <button className="btn btn-ghost">Categories</button>
          <button className="btn btn-ghost">How it Works</button>
        </div>

        {/* Right - Notification & Avatar */}
        <div className="flex items-center space-x-4">
          <button className="btn btn-ghost">
            <CiBellOn size={24} />
          </button>
          <img
            className="btn btn-ghost btn-circle avatar w-10 rounded-full"
            alt="user avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
     </div>
    </div>
    );
};

export default NavBar;