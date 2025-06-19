import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/> ;
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log("ItemCard: ", itemCards);

    return (
        <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines?.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h3>Menu</h3>
        <ul>
            {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 ||item.card.info.defaultPrice/100}</li>)}
            <li>{itemCards[0].card.info.name}</li>
            <li>Burger</li>
            <li>Diet Coke</li>
        </ul>
        </div>
    );
    };

export default RestaurantMenu;
