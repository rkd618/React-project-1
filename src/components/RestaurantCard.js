import { CDN_URL } from "../utills/constant"
const ResturantCard = (props) =>{
    const { resData } = props ;
    const { name, cuisines, avgRating, costForTwo} = resData?.info || {};
    const { deliveryTime } = resData?.info?.sla || {};
    return(
        <div className="res-card" >
           <img className="res-logo" alt="res-logo" src={`${CDN_URL}/${resData?.info?.cloudinaryImageId}`}/>
           <h3 className="overflow-text" title={name}>{name}</h3>
           <h4 className="overflow-text" title={cuisines?.join(", ")}>{cuisines?.join(", ")}</h4>
           <h4>{avgRating} Star</h4>
           <h4>{costForTwo}</h4>
           <h4>{deliveryTime} Mins</h4>
        </div>
    );
} 
export default ResturantCard;