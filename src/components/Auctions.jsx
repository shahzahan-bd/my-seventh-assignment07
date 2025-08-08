import React, { useState } from 'react';
import ItemsShowCase from './ItemsShowCase';
import { RiPokerHeartsLine } from "react-icons/ri";
const Auctions = () => {

    const [bid, setBid]= useState([]);

    const handleBid=(item)=>{
       setBid([...bid,item]);
       document.getElementById('part1').style.display='none';
       document.getElementById('part2').style.display='block';
       document.getElementById('btn-bid').style.color='red';
    }

    const handleRemove=()=>{
        console.log("remove click hoise");
    }

    return (
        <div>
            <div className='mt-10 space-y-2'>
            <h1 className='text-4xl'>Active Auctions</h1>
            <h3 className='text-xl'>Discover and bid on extraordinary items</h3>
            </div>

            <div className="auctions-all-container flex">
                <div className="items-container w-[70%]">
                <ItemsShowCase handleBid={handleBid}></ItemsShowCase>
            </div>

            <div className="favourite-items-container w-[30%]">
                <div className='flex items-center gap-2'>
                    <RiPokerHeartsLine />
                    <h1 className='font-semibold text-lg'>Favourite Items</h1>
                </div>

                <div id='part1'>
                <h3>No favourites Yet</h3>
                <p>Click the heart icon on any item to add it to your favourites</p>
                </div>

                <div id='part2'>
                    {
                        bid.map((bidded)=>(
                        <div
                        key={bidded.id}
                        className='flex items-center gap-3 p-2'>
                <img src={bidded.image} alt="" className='w-[70px] h-[70px]'/>

                <div className='flex flex-col'>
                    <span>{bidded.title}</span>

                    <span className='flex gap-2'>
                    <span className='text-sm'>{bidded.currentBidPrice}</span>
                    <span className='text-sm'>{"Bids: 12"}</span>
                    </span>

                </div>
                      <button id='btn-remove' className='btn btn-ghost ml-auto' onClick={handleRemove}>X</button>
                </div>
                        ))
                    }
                    <h1 className='text-2xl font-semibold'>Total bids Amount {0}</h1>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Auctions;