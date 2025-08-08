import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
        {/* Banner Image */}
            <img className='w-full h-[85vh]' src="/assets/Banner-min.jpg" alt="" />
            
            {/* Text Overlay */}
            <div className="text-banner absolute inset-50 text-white space-y-6">
                <h1 className='text-5xl font-bold'>Bid on Unique Items From
                    <br/>Around The World</h1>
                <h3 className='text-3xl font-semibold'>Discover rare collections, luxury goods, and vintage
                    <br/>treasures in our curated auctions</h3>
                <button className='btn bg-white'>Explore Auctions</button>
            </div>
        </div>
        
    );
};

export default Banner;