import React from "react";
import './UserClass.css';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "", 
        bio: "No bio available", 
        company: "Not available",
        followers: 0,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rkd618");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, bio, company, followers } = this.state.userInfo;

    return (
      <div className="about-page">
        <div className="about-header">
          <img className="avatar" src={avatar_url} alt="User avatar" />
          <h1>{name}</h1>
          <h2>{location}</h2>
        </div>
        <div className="about-details">
          <p><strong>Bio:</strong> {bio}</p>
          <p><strong>Company:</strong> {company}</p>
          <p><strong>Followers:</strong> {followers}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
