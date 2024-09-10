import {LOGO_URL} from "../utills/constant"
 const Header = () =>{
    return(
        <div className="header">
         <div>
         <img className="logo" src={LOGO_URL}/>
         </div>
         <div className="Nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
         </div>
        </div>
    )
}
export default Header;