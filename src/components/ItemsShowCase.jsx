import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemsShowCase = ({handleBid}) => {
const [items,setItems]=useState([]);

    useEffect(()=>{
        fetch("bid.json")
        .then(res=>res.json())
        .then(data=>setItems(data));
    },[])

    return (
  <table className='table'>
    <thead>
      <tr>
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>

    <tbody>
      {
      items.map((item)=><Item key={item.id} handleBid={handleBid} item={item}></Item>)
      }
    </tbody>
  </table>
    );
};

export default ItemsShowCase;
