import React from 'react'
import { Link } from 'react-router-dom';

const Food = () => {
  return (
    <div>
        <h3>Food you should try:</h3>
        <ul>
            <li>Hamburger</li>
            <li>Whey protein</li>
            <li>Chicken & rice</li>
        </ul>
        <p>Go back to <Link to="/home">home page</Link></p>
    </div>
  )
}

export default Food