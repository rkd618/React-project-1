import ResturantCard from "./RestaurantCard";
import { useState } from "react";
import restlist from "../utills/mockData";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState(restlist);

  const filterTopRated = () => {
    const topRatedRestaurants = restlist.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setListofRestaurants(topRatedRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="Rest-container">
        {listofRestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
