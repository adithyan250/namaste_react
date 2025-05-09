import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
  const [resData, setRes] = useState([]);
  const [filteredRestaurtant, setFilteredRestaurtant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // console.log("body rendered");
  

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData = async () => {
      const fetchUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      const data = await fetch(fetchUrl);

      const json = await data.json();
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurtant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      // console.log(json);
    }

    return resData.length === 0 ?(
      <Shimmer/>
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>

            <button onClick={() => {
              const filteredRestaurtants = resData.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
              setFilteredRestaurtant(filteredRestaurtants);
              console.log(searchText);
            }}>Search</button>
          </div>

          <button className="filter-btn" 
          onClick={()=>{
            setRes()
            const filteredRes = resData.filter((res)=> res.info.avgRating > 4);
            setRes(filteredRes)
          }}>Top Rated Restaurants</button>
        </div>

        <div className="res-container">
          {filteredRestaurtant.map((restaurant)=>(
            <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
          ))}
          
        </div>
      </div>
    );
  };

export default Body;