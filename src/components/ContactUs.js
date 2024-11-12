import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const ContactUs = () =>{
    return (
        <div>
            <h1>Contact Us</h1>
            <h2>
               Contact Us Page
            </h2>
            <User name={"Peter"} location={"NewYork"} email={"peterparker@gmail.com"}/>
            <User name={"Tony stark"} location={"California"} email={"tonystark@gmail.com"}/>
            <hr/>
            <UserClass name={"heath keiger"} location={"California"} Email={"marvel@gmail.com"}/>
        </div>
    )
}

export default ContactUs;