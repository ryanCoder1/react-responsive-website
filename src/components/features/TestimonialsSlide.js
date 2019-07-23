import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";


import testimonials from './testimonialslist';


const styles = { height: 400, width: "100%" };

class TestimonialsSlide extends Component{
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }

  render(){
    const testimonial = testimonials.map((testimonial, index) => {
      return (
        <div style={{height: 400}}>
          <div className="carousel-center testimonial-car-center">
            <q>{testimonial.content}</q>
            <p className="mt-3">{testimonial.author}</p>
            <p>{testimonial.from}</p>

          </div>
        </div>
      );
    });
  return (
    <section className="home-testimonials p-5 ">

    <div>

    <div >
    <RBCarousel
      animation={true}
      autoplay={this.state.autoplay}
      slideshowSpeed={10000}
      onSelect={this.onSelect}
      ref={r => (this.slider = r)}
      version={4}
    >
     {testimonial}

    </RBCarousel>
         </div>
         </div>
    </section>
  );
}
}


export default TestimonialsSlide;
