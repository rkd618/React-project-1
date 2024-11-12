import React from "react";
import UserClass from "./UserClass";
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent constructor")

    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                <UserClass/>
            </div>
        )
    }
}
export default About;