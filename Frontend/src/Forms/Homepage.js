// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="content">
        <h1>Welcome to Doubt Share</h1>
        <p>Discover a world of possibilities.</p>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
