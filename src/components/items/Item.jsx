import React from "react";
import { FaRegClock } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";

const Item = ({ item, handleCoock }) => {
  const {
    recipe_img,
    recipe_name,
    Ingredients,
    short_dis,
    recipe_id,
    calories,
    preparing_time,
    new_items,
  } = item;

  return (
    <div className="md:col-span-3 col-span-6">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[350px] w-full" src={recipe_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipe_name}
            <div className={new_items ? "badge badge-secondary" : "hidden"}>
              New
            </div>
          </h2>
          <p className="text-gray-400">{short_dis}</p>
          <div>
            <h1 className="text-[18px] font-bold">
              Ingredients: {Ingredients.length}
            </h1>
            {Ingredients.map((itm, idx) => (
              <li key={idx}>{itm}</li>
            ))}
          </div>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">
              <FaRegClock /> {preparing_time} minutes
            </div>
            <div className="badge badge-outline">
              <AiFillFire />
              {calories} Calories
            </div>
          </div>
          <button
            onClick={() => {
              handleCoock(item);
            }}
            className="btn btn-success text-white hover:btn-secondary duration-300 ease-in-out my-3"
          >
            Want to cock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
