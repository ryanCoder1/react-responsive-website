import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../images/yogalogo.png';

class Header extends Component {

render() {
  return (
    <nav className="navbar nav-bar navbar-expand-lg navbar-white bg-white">
      <span className="logo-wrapper navbar-brand d-block ml-3"><Link to="/"><img className="img-logo" src={logo} alt="logo" /></Link></span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav-ul ml-auto mr-md-3 mr-0 d-flex flex-column flex-sm-row justify-content-start justify-content-sm-end align-items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
 }
}
export default Header;
