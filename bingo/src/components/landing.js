import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => (
  <div>
    <div>
      <div><Link to="/SignUp">Sign Up</Link></div>
      <div><Link to="/SignIn">Sign In</Link></div>
    </div>
    <h1>Bangarang Bingo</h1>
    <div className="icon-cards">
      <div className="icon-cards__content">
        <div className="icon-cards__item">BINGO</div>
        <div className="icon-cards__item">BINGO</div>
        <div className="icon-cards__item">BINGO</div>
      </div>
    </div>
    <div><Link to="/SignUp">Make Your Bingo Card Now!</Link></div>
  </div>
);

export default Landing;
