import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from './actions/message'
import InputPreview from './components/InputPreview';
import AdminPanel from './components/AdminPanel/AdminPanel';
import TextButton from './components/TextButton/TextButton';
import UserDetailsCard from './components/UserDetailsCard/UserDetailsCard';
import Carousel from './components/Carousel/CarouselComponent';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import LandingPage from './screens/LandingPage';
import About from './components/About/About';
import Careers from './screens/Careers';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0
    }
    
  }
  _onChange = (value) => {
      this.props.dispatch(setMessage(value))
    }
  route = () => {
    this.setState({
      screen: !this.state.screen
    })
  }
  render () {
    const {message} = this.props.messageReducer;
    return (
    <div>
      {this.state.screen === 0 ? <LandingPage route={()=>this.route()}/> : <Careers route={()=>this.route()}/>}
    </div>
    )
  }
}

export default connect(state => state)(App);
