import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        
        
        fetchData();
    }, []);

    const fetchData = async () => {
       
        const data = await fetch(RESTAURANT_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data);
        
    }
 
    return resInfo
}

export default useRestaurantMenu;