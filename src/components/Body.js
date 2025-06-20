import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Connect to internet!!</h1>

    return resData.length === 0 ?(
      <Shimmer/>
    ) : (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>

            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
            onClick={() => {
              const filteredRestaurtants = resData.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
              setFilteredRestaurtant(filteredRestaurtants);
              console.log(searchText);
            }}>Search</button>
          </div>

          <div className="search m-4 p-4 flex items-center ">
            <button className="px-4 py-2 bg-gray-100 rounded-lg" 
          onClick={()=>{
            setRes()
            const filteredRes = resData.filter((res)=> res.info.avgRating > 4);
            setRes(filteredRes)
          }}>Top Rated Restaurants</button>
          </div>
          
        </div>

        <div className="flex flex-wrap">
          {filteredRestaurtant.map((restaurant)=>(
            <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
          ))}
          
        </div>
      </div>
    );
  };

export default Body;