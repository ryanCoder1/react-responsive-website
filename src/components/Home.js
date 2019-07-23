import React, { Component } from 'react'
import logo from '../images/yogalogobig.png';
import yogaClass from '../images/yogaclass.jpg';
import yogaInstructors from '../images/yogainstructors.jpg';
import yogaElders from '../images/yogaelders.jpg';
import yogaForPregnancy from '../images/yogaforpregnancy.jpg';
import SidebarAdvertise from './features/SidebarAdvertise';
import ContactAdvertise from './features/ContactAdvertise';
import Testimonials from './features/TestimonialsSlide';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {

render() {
  const greeting = "Hello all!";
  return (
    <div>
    <header className="d-flex flex-wrap">
      <div className="bg-image col-xs-12 col-sm-7 col-md-8">
        <div className="business-info d-flex flex-wrap flex-column flex-md-row">
          <span className="b-right">yogaShop@yahoo.com  </span>
          <span className="b-right">43 Doxter st. Manchester NH 03104  </span>
          <span>(603) 555-4678</span>
        </div>
      </div>
      <aside className="header-side  col-xs-12 col-sm-5 col-md-4 d-flex justify-content-center align-items-center">
        <div className="header-side-wrapper text-center">
          <img className="header-side-img" src={logo} alt="logoImage" />
          <h5>Welcome to</h5>
          <h3>The Yoga Shop </h3>
          <p>We offer yoga in all varieties.<br/> What you want in yoga, we accommodate!</p>
        </div>
      </aside>
    </header>
    <section className="home-info d-flex justify-content-center align-items-center flex-wrap flex-column flex-sm-row py-5">
      <div className="home-about-info col-xs-12 col-sm-12 col-md-7 py-5 px-4">
          <h4 className="home-headers"><Link to="/about" >About</Link></h4>

        <p className="mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
           but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
           like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <Link to="/about" className="btn link">More...</Link>
      </div>
      <div className="home-other-info col-xs-12 col-sm-12 col-md-5 py-5">
          <img src={yogaClass} className="home-about-img" alt="yoga class"/>
      </div>
    </section>
    <section className="home-services py-5 pl-4">
      <h4 className="home-headers"><Link to="/services" >Services</Link></h4>

      <ul className="home-services-ul d-flex justify-content-center align-items-start flex-wrap flex-col flex-sm-row mt-3">
        <li>
          <div className="services-image-div">
            <img src={yogaInstructors} alt="yoga instructors" />
          </div>
          <div className="services-text">
            <h5>Yoga Instructors</h5>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </li>
        <li>
          <div className="services-image-div">
            <img src={yogaForPregnancy} alt="yoga for pregnancy" />
          </div>
          <div className="services-text">
            <h5>Yoga for Pregnancy</h5>
            <p>Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>
        </li>
        <li>
          <div className="services-image-div">
            <img src={yogaElders} alt="yoga elders" />
          </div>
          <div className="services-text">
            <h5>Yoga for Elders</h5>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s the industry's standard dummy</p>
          </div>
        </li>
      </ul>
    </section>
    <ContactAdvertise />
    <Testimonials />
    </div>
  );
 }


}

export default Home;
