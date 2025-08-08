import React from 'react';
import { RiPokerHeartsLine } from "react-icons/ri";

const Item = ({item, handleBid}) => {
    //const {item}=props;
    return (
      <tr>
        <td>
            <div className='flex items-center gap-3'>
                <img src={item.image} alt="" style={{ width: '60px', height: '60px' }}/> 
        {item.title}
            </div>
        </td>
        <td>{item.currentBidPrice}</td>
        <td>{item.timeLeft}</td>
        <td>
            <button id='btn-bid' className="btn btn-ghost" onClick={()=>handleBid(item)}><RiPokerHeartsLine /></button>
        </td>
      </tr>
    );
};

export default Item;