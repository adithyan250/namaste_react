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
    <div className="res-card" style={{backgroundColor: "#f0f0f0",}}>
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4> 
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minute</h4>
    </div>
  );
};

export default RestaurantCard;