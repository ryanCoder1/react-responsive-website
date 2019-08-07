import React, { Component } from 'react'
import heroImg from '../../images/yogaServicesHeroadj.jpg';
import classes from './servicesInfo';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ServicesSections extends Component {

constructor(props){
  super(props);
  this.state = {
    imgName: '',
    images: [

      '../../images/pregnant.jpg',
      '../../images/elderly.jpg',
      '../../images/outside.jpg',
      '../../images/adultswithkids.png',
      '../../images/menandwomen.jpg',
      '../../images/private.jpg',
      '../../images/travel.jpg'

    ],
    images64: [

      require('../../images/pregnant.jpg'),
      require('../../images/elderly.jpg'),
      require('../../images/outside.jpg'),
      require('../../images/adultswithkids.png'),
      require('../../images/menandwomen.jpg'),
      require('../../images/private.jpg'),
      require('../../images/travel.jpg')
    ]
  }
}
componentDidMount(){

}
updateImage(image, images){
  for(let i = 0; i < images.length; i++){
   if(images[i].indexOf(image) !== -1){
  return(
       <img className="services-img col-xs-12 col-sm-12 col-md-3 mx-3 mx-md-3 mr-auto p-0" src={this.state.images64[i]} alt="elders yoga"/>
      )
     }
   }
}
  render() {

  return (
    <div>
    {classes.map((yogaClass, index) =>

      <section id={yogaClass[0].imgName} className="services services-sections py-5 px-3"  key={index}>
        <div className="services-wrapper d-flex justify-content-center align-items-center flex-column flex-md-row mt-5">
         {this.updateImage(yogaClass[0].imgName, this.state.images)}

          <div className="services-desc col-xs-12 col-sm-12 col-md-6 mt-4 mt-md-0">
            <h4 className="text-capitalize">{yogaClass[0].class}</h4>
            <p className="ml-2">{yogaClass[0].desc}</p>
          </div>
          <div className="services-class col-xs-12 col-sm-12 col-md-3 ">
            <h6 className="session text-capitalize">Sessions</h6>
            <ul className="p-0 ml-2">
               {yogaClass[0].days.map((day, index) =>
                  <li key={index}>
                  <span className="services-date">{day[0]}</span>
                  <span className="hours-light">{day[1]}</span>
                  </li>
                )}
            </ul>
          </div>
        </div>
      </section>

    )}
    </div>

    );
   }
}
const bgImageStyle = {
  backgroundImage: "linear-gradient(to bottom, rgba(170, 212, 0, .2), rgba(170, 212, 0, .3)), url(" + heroImg + ")",
}


export default ServicesSections;
