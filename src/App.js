import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';

class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
       compInfo: {
           email: 'yogaShop@yahoo.com',
           address: '43 Doxter st. Manchester NH 03104',
           phoneNumber: '(603) 555-4678'
         },

    }
  }
  render(){
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={(props) => <Home compInfo={this.state.compInfo} />}/>
          <Route path="/services" render={(props) => <Services compInfo={this.state.compInfo} />}/>
        </div>
      </Router>
    );
  }
}
export default App;
