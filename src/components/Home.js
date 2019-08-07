import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import logo from '../images/yogalogobig.png';
import heroImg from '../images/yogahero.jpg';
import yogaClass from '../images/yogaclass.jpg';
import yogaInstructors from '../images/yogainstructors.jpg';
import yogaElders from '../images/elderly.jpg';
import yogaForPregnancy from '../images/pregnant.jpg';
import SidebarAdvertise from './features/SidebarAdvertise';
import ContactAdvertise from './features/ContactAdvertise';
import Testimonials from './features/TestimonialsSlide';
import companyInfo from './features/websiteInfo';



class Home extends Component {

    render() {
      console.log(companyInfo);
      const greeting = "Hello all!";
      return (
        <div>
        <header className="d-md-flex flex-md-wrap">
          <aside className="header-side col-xs-12 col-sm-12 col-md-4 bg-dark text-light d-flex justify-content-center align-items-center py-3">
            <div className="header-side-wrapper text-center">
              <img className="header-side-img" src={logo} alt="logoImage" />
              <h5>Welcome to</h5>
              <div className="border-holder-wrapper d-flex justify-content-center">
                <div className="border-holder">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  <h3>The Yoga Shop</h3>
                </div>
              </div>
              <p className="mt-3">We offer yoga in all varieties.<br/> What you want in yoga, we accommodate!</p>
            </div>
          </aside>
          <div className="bg-image home-hero-height col-xs-12 col-sm-12 col-md-8" style={bgImageStyle}>
            <div className="business-info d-flex flex-wrap flex-column flex-md-row">
              <span className="b-right">{companyInfo[0].email} </span>
              <span className="b-right">{companyInfo[0].address}  </span>
              <span>{companyInfo[0].phoneNumber}</span>
            </div>
          </div>

        </header>
        <section className="home-info d-flex justify-content-center align-items-center flex-wrap flex-column flex-sm-row py-5">
          <div className="home-about-info col-xs-12 col-sm-12 col-md-7 py-5">
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

        <section className="home-services py-5">
          <div className="pl-3">
            <h4 className="home-headers"><Link to="/services#header" >Services</Link></h4>
          </div>
        <ScrollAnimation animateIn="bounceInUp" queueClass="queue" animateOnce={true}>
          <ul className="home-services-ul d-flex justify-content-center justify-content-sm-around align-items-start flex-wrap mt-5 p-0">
            <li className="queue">

               <Link to="/services#instructors">
                  <div className="services-image-div">
                    <img src={yogaInstructors} alt="yoga instructors" />
                    <span >For more info</span>
                  </div>
                  <div className="services-text">
                    <h5>Yoga Instructors</h5>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>

                </Link>

            </li>
            <li className="queue">
              <Link to="/services#pregnancy">
                <div className="services-image-div">
                  <img src={yogaForPregnancy} alt="yoga for pregnancy" />
                  <span >For more info</span>
                </div>
                <div className="services-text">
                  <h5>Yoga for Pregnancy</h5>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever</p>
                </div>
              </Link>
            </li>
            <li className="queue">
            <Link to="/services#elderly">
                <div className="services-image-div">
                  <img src={yogaElders} alt="yoga elderly" />
                  <span >For more info</span>
                </div>
                <div className="services-text">
                  <h5>Yoga for Elderly</h5>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s the industry's standard dummy</p>
                </div>
              </Link>
            </li>
          </ul>
        </ScrollAnimation>
        </section>
        <ContactAdvertise />
        <Testimonials />
        </div>
      );
     }


}
const bgImageStyle = {
  backgroundImage: "linear-gradient(to bottom, rgba(170, 212, 0, .2), rgba(170, 212, 0, .3)), url(" + heroImg + ")",
}
export default Home;
