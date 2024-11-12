import React, { useState } from "react";

const User = ({ name, location, email }) => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prevCount) => prevCount + 1); 
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h2>Email: {email}</h2>
      <hr />
      <div>
        <p>Count: {count}</p>
        <button onClick={countHandler}>Increase Count</button>
      </div>
    </div>
  );
};

export default User;
