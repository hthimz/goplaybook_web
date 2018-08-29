import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner/Banner';
import TournamentTab from '../components/TournamentTab/TournamentTab';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import About from '../components/About/About';
import Videos from '../components/Videos/Videos';
import Blogs from '../components/Blogs/Blogs';
import Footer from '../components/Footer/Footer';
class LandingPage extends React.Component {
  nextPath = path => {
    // this.props.history.push(path);
    this.props.route();
  }
  render() {
    console.log(this.props);
    return (
      <div>
          <Banner />
          <TournamentTab />
          <Videos />
          <Blogs />
          <About />
          <CarouselComponent />
          <Footer navigate={path=>this.nextPath(path)}/>
      </div>
    );
  }
}

export default LandingPage;
