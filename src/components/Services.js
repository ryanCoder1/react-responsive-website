import React, { Component } from 'react'
import yogaClass from '../images/yogaclass.jpg';
import yogaInstructors from '../images/yogainstructors.jpg';
import yogaElders from '../images/elderly.jpg';
import yogaForPregnancy from '../images/pregnant.jpg';
import heroImg from '../images/yogaServicesHeroadj.jpg';
import ContactAdvertise from './features/ContactAdvertise';
import Testimonials from './features/TestimonialsSlide';
import companyInfo from './features/websiteInfo';
import classes from './features/servicesInfo';
import ServicesSections from './features/ServicesSections';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Services extends Component {

scrollToElement(e){
  e.preventDefault();
  const href = e.target.getAttribute('href');
  const hrefReplace = href.replace('#', '');
  const idTo = document.getElementById(hrefReplace);
  const idOffsetTop = idTo.offsetTop;

  window.scrollTo({
    top: idOffsetTop,
    behavior: 'smooth'
  });
}

  render() {

    return (
      <div>
      <header id="header">
        <div className="bg-image services-hero-height col-12" style={bgImageStyle}>
         <div className="page-name d-flex justify-content-center align-items-center h-100">Services</div>
          <div className="business-info d-flex flex-wrap flex-column flex-md-row">
            <span className="b-right">{companyInfo[0].email} </span>
            <span className="b-right">{companyInfo[0].address}  </span>
            <span>{companyInfo[0].phoneNumber}</span>
          </div>
        </div>

      </header>
          <section className="services-offer-container d-flex justify-content-center align-items-center flex-wrap p-0 ">
            <div className="services-offer col-xs-12 col-sm-12 col-md-4 d-flex justify-content-center align-items-center flex-column py-5">
                <h4>Classes offered</h4>
                <ul className="offer-ul p-0 m-0">
                  <li><a href="#menandwomen" onClick={(e) => this.scrollToElement(e)}>Men and Women</a></li>
                  <li><a href="#elderly" onClick={(e) => this.scrollToElement(e)}>Elderly</a></li>
                  <li><a href="#pregnant" onClick={(e) => this.scrollToElement(e)}>Pregnant</a></li>
                  <li><a href="#adultswithkids" onClick={(e) => this.scrollToElement(e)}>Adults and kids</a></li>
                  <li><a href="#outside" onClick={(e) => this.scrollToElement(e)}>Outside</a></li>
                  <li><a href="#private" onClick={(e) => this.scrollToElement(e)}>Private</a></li>
                  <li><a href="#travel" onClick={(e) => this.scrollToElement(e)}>Travel</a></li>


                </ul>
            </div>
            <div className="services-content col-xs-12 col-sm-12 col-md-8 d-flex justify-content-center align-items-center m-0">
              <p className="mx-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            </div>
          </section>
          <ServicesSections />
        </div>


    );
   }
}
const bgImageStyle = {
  backgroundImage: "linear-gradient(to bottom, rgba(170, 212, 0, .2), rgba(170, 212, 0, .3)), url(" + heroImg + ")",
}


export default Services;
