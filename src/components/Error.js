import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div style={{ textAlign: "center" }}>
      <img 
        src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg?size=626&ext=jpg&ga=GA1.1.2084463250.1690443786&semt=ais_hybrid"
        style={{ objectFit: "contain", width: "100%", height: "auto",maxWidth: "600px", margin:"0 auto" }}
        alt="404 Error - Page not found"
      />
      <h1>Oops! Page Not Found</h1>
      <h2>Sorry, the page you're looking for doesn't exist.</h2>
      <h2>{err.status}:{err.statusText}</h2>
      <h2><a href="/">Go Back to Home</a></h2>
    </div>
  );
};
export default Error;
