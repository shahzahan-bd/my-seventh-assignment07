import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center text-center mt-6'>
            <h1> <span className='text-blue-600'>Auction</span><span className='text-yellow-400'>Gallery</span></h1>
            <div className='flex gap-4 mt-4'>
                <button className="btn btn-ghost">Bid.</button>
                <button className="btn btn-ghost">Win.</button>
                <button className="btn btn-ghost">Own.</button>
            </div>
            <div className="flex space-x-2">
                <button className="btn btn-ghost">Home</button>
                <button className="btn btn-ghost">Auctions</button>
                <button className="btn btn-ghost">Categories</button>
                <button className="btn btn-ghost">How it Works</button>
            </div>
            <p>©2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;