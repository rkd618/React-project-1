import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENUAPI } from "../utills/constant";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]); // State to store menu items

  const { resId } = useParams(); 
    useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const url = `${MENUAPI}${resId}`;
      const response = await fetch(url);
      const newData = await response.json();

      // Extract restaurant info
      const restaurantInfo = newData?.data?.cards?.[2]?.card?.card?.info;
      setRestInfo(restaurantInfo);

      // Extract item cards (menu items)
      const itemCards =
        newData?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
      setMenuItems(itemCards);

      console.log("RestaurantMenu Data:", newData);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const { name, avgRating, costForTwoMessage, cuisines } = restInfo || {};

  return (
    <div>
      {restInfo ? (
        <>
          <h1>{name}</h1>
          <h2>{cuisines?.join(", ")}</h2>
          <h2>{costForTwoMessage}</h2>
          <h2>Rating: {avgRating}</h2>
          <h3>Menu:</h3>
          <ul>
            {menuItems.length > 0 ? (
              menuItems.map((item, index) => (
                <li key={index}>
                  {item.card.info.name} - Rs. {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                </li>
              ))
            ) : (
              <li>No items available</li>
            )}
          </ul>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default RestaurantMenu;
