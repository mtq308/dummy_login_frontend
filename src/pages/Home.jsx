import React from "react";
import { Link } from "react-router-dom";

const Home = ({ onLogout }) => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <h3>Pages you should see!</h3>
      <ul>
        <li>
            <Link to="/gym">Gym</Link>
        </li>
        <li>
        <Link to="/food">Food</Link>
        </li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
