import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";



const Body = () => {
  const [resData, setRes] = useState(resList);


    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={()=>{
            setRes()
            const filteredRes = resData.filter((res)=> res.info.avgRating > 4);
            setRes(filteredRes)
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {resData.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))}
          
        </div>
      </div>
    );
  };

export default Body;