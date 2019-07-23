import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class ContactAdvertise extends Component {

render() {
  return (
    <section className="contact-advertise d-flex flex-column justify-content-center align-items-center">
        <div>
          <h2>If you'd like to <span className="contact-color font-weight-bold">talk</span>  to us</h2>
        </div>
        <div className="contact-link">
          <Link to="/contact" >Contact</Link>
        </div>
    </section>
  );
 }
}
export default ContactAdvertise;
