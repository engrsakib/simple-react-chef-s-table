import React from "react";
import { FaRegClock } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";

const Item = ({ item }) => {
  const {
    recipe_img,
    recipe_name,
    Ingredients,
    short_dis,
    recipe_id,
    calories,
    preparing_time,
  } = item;
  return (
    <div className="col-span-3">
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[350px] w-full" src={recipe_img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {recipe_name}
            <div class="badge badge-secondary">NEW</div>
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
          <div class="card-actions justify-start">
            <div class="badge badge-outline">
              <FaRegClock /> {preparing_time} minutes
            </div>
            <div class="badge badge-outline">
              <AiFillFire />
              {calories} Calories
            </div>
          </div>
          <button className="btn btn-success my-3">Want to cock</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
