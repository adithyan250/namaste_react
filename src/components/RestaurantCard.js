const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        cloudinaryImageId

    } = resData?.info

    const {deliveryTime} = resData.info.sla

  return (
    <div className="m-4 p-4 w-[245] rounded-xl hover:bg-gray-100">
        <img className="rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4> 
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minute</h4>
    </div>
  );
};

export default RestaurantCard;