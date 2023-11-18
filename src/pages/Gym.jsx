import React from 'react';
import { Link } from 'react-router-dom';

const Gym = () => {
  return (
    <div>
        <h3>Exercise you should try:</h3>
        <ul>
            <li>Barbell bench press</li>
            <li>Dumbbell bench press</li>
            <li>Barbell squat</li>
        </ul>
        <p>Go back to <Link to="/home">home page</Link></p>
    </div>
  )
}

export default Gym;