import {LOGO_URL} from "../utills/constant"
import { useState  } from "react";
import {Link} from "react-router-dom"

const Header = () =>{
const [login , setLogin] = useState("Login")

    const handleLogin = () => {
        setLogin(login === "Login" ? "Logout" : "Login");
      };
    return(
        <div className="header">
         <div>
         <img className="logo" src={LOGO_URL}/>
         </div>
         <div className="Nav-items">
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to = "/about">About Us</Link></li>
                <li><Link to = "/ContactUs">Contact Us</Link></li>
                <li><Link to = "/Cart">Cart</Link></li>
                <button className="login-btn" onClick={handleLogin}>{login}</button>
            </ul>
         </div>
        </div>
    )
}
export default Header;