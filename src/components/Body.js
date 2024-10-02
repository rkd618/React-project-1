import ResturantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Fix: Import useLocation
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import restlist from "../utills/mockData";
import RestaurantMenu from "./RestaurantMenu";
import ScrolltoTop from "../utills/ScrolltoTop";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const location = useLocation();

  useEffect(() => {
    fetchData(); 
  }, [location.pathname]);

  const fetchData = async () => {
    console.log("fetchData called");
    try {
      const response = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/homepage/getCards?lat=19.2113806&lng=72.8570866");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      const restaurants = json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants && Array.isArray(restaurants)) {
        setListofRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } else {
        setListofRestaurants(restlist);
        setFilteredRestaurants(restlist);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setListofRestaurants(restlist);
      setFilteredRestaurants(restlist);
    }
  };

  const filterTopRated = () => {
    const restaurants = listofRestaurants.filter(
      restaurant => restaurant.info.avgRating > 4.5
    );
    setFilteredRestaurants(restaurants);
  };

  const resethandle = () => {
    setSearchtext("");
    setFilteredRestaurants(listofRestaurants); // Reset to the original list
  };

  const handleSearch = (e) => {
    setSearchtext(e.target.value);
    const searchResult = listofRestaurants.filter(
      restaurant => restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRestaurants(searchResult);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="filter">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={handleSearch}
            placeholder="Search Restaurants"
          />
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        <button className="reseat-btn" onClick={resethandle}>
          <FilterAltOffIcon />
        </button>
      </div>

      <div className="Rest-container">
        {Array.isArray(filteredRestaurants) && filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <Link key={restaurant?.info?.id} to={"/RestaurantMenu/" + restaurant?.info?.id} style ={{textDecoration: "none", color: "inherit"}}>
              <ResturantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <div>
            <p>No restaurants match your search</p>
            <button className="reseat-btn" onClick={resethandle} style={{ backgroundColor: "lightblue" }}>
              Go Back To Main Page
            </button>
          </div>
        )}
        <ScrolltoTop/>
      </div>
    </div>
  );
};

export default Body;
