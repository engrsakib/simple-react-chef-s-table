import React, { useEffect, useState } from 'react';
import Item from '../items/Item';

const Items = ({ handleCoock }) => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        setitems(data);
      } catch (error) {
        console.log(error);
      }
    };

    dataFetch();
  }, []);
  return (
    <div className="md:w-2/3 grid grid-cols-6 gap-3 mt-7">
      {items.map((item, idx) => (
        <Item key={idx} handleCoock={handleCoock} item={item}></Item>
      ))}
    </div>
  );
};

export default Items;