import React from "react";
import PropTypes from "prop-types";
import logoweb  from "../../src/logo-web.png";
import { Link } from "react-router-dom";
function About(props) {
  return (
    <div className="card">
      {/* <img src={imgSource.url} className="card-img-top" /> */}
      <Header/>
      <div className="card-body">
        <h5 className="card-title">About Us</h5>
        <p className="card-text">
          This is my First website in React I am software Developer and learning react 
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Learn</li>
        <li className="list-group-item">Practice</li>
        <li className="list-group-item">Enjoy</li>
      </ul>
      <div className="card-body">
        <Link to="/about" className="card-link">
          Home
        </Link>
      </div>
    </div>
  );
}

function Header() {
  // Import result is the URL of your image
  return <img src={logoweb} alt="Logo" style={{width:100}}/>;
}


About.propTypes = {};

export default About ;
