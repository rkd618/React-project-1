import { LOGO_URL } from "../utills/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import userOnlinestatus from "../utills/userOnlinestatus";
import './Header.css';

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlinestatus = userOnlinestatus(); 

  const handleLogin = () => {
    setLogin(login === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="Nav-items">
        <ul>
          {/* <li>
            <span className={`status-indicator ${onlinestatus ? "online" : "offline"}`}>
              {onlinestatus ? "Online" : "Offline"}
            </span>
          </li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
          {/* Use className instead of style for conditional classes */}
          <button 
  className="login-btn" 
  style={{ backgroundColor: onlinestatus ? "	#90EE90" : "#f3d3d9", color: "white" }}
  onClick={handleLogin}
>
  {login}
</button>

        </ul>
      </div>
    </div>
  );
};

export default Header;
