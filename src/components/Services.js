import React, { Component } from 'react'
import yogaClass from '../images/yogaclass.jpg';
import yogaInstructors from '../images/yogainstructors.jpg';
import yogaElders from '../images/yogaelders.jpg';
import yogaForPregnancy from '../images/yogaforpregnancy.jpg';
import heroImg from '../images/yogaServicesHeroadj.jpg';
import ContactAdvertise from './features/ContactAdvertise';
import Testimonials from './features/TestimonialsSlide';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Services extends Component {

  render() {

    return (
      <div>
      <header className="">
        <div className="bg-image services-hero-height col-12" style={bgImageStyle}>
         <div className="page-name d-flex justify-content-center align-items-center h-100">Services</div>
          <div className="business-info d-flex flex-wrap flex-column flex-md-row">
            <span className="b-right">{this.props.compInfo.email} </span>
            <span className="b-right">{this.props.compInfo.address}  </span>
            <span>{this.props.compInfo.phoneNumber}</span>
          </div>
        </div>

      </header>
        <section id="instructors" className="instructors">
        <h3>instructors</h3>
        </section>
        <section id="pregnancy"  className="pregnancy">
        <h3>pregnancy</h3>
        </section>
        <section id="elderly" className="elderly">
        <h3>elderly</h3>
        </section>
      </div>
    );
   }
}
const bgImageStyle = {
  backgroundImage: "linear-gradient(to bottom, rgba(170, 212, 0, .2), rgba(170, 212, 0, .3)), url(" + heroImg + ")",
}

export default Services;
