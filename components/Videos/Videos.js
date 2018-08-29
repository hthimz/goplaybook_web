import React from "react";
import Slider from "react-slick";
// import { thinLeft, thinRight } from 'react-icons-kit/entypo'
import VideoCarousel from '../VideoCarousel/VideoCarousel';

export default class Videos extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  image = (i,id) => {
    return (
      <div className={'w-100'}>
        {/* <img
        src='https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
        style={this.state.index===i?{width:'700px', height:'350px', margin:'10px'}:{
          width:'300px', height:'170px'
        }}
        /> */}
        <VideoCarousel ID={id} active/>
      </div>
    );
  }
  beforeChange = (oldIndex, newIndex) => {
    this.setState({index: newIndex}, ()=>{return;});
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: "60px",
      className: "center d-flex w-100 align-items-center",
      variableWidth: true,
      beforeChange: this.beforeChange,
      accessibility: true
    };
    const id='6k-6Wi-HW5k';
    return (
      <div style={{ backgroundColor: '#ffffff', opacity:1}}>
        <div style={{fontFamily: 'Helvetica Neue ', fontStretch: 'condensed',fontSize: '30px', color: '#000000',fontWeight: 'bold', paddingTop:'20px', marginLeft:'100px', paddingLeft:'90px'}}>
          Social Media Presence
        </div>
      <div className={'d-flex justify-content-center mt-4'}>
        {/* <Slider {...settings}> */}
          <div className={'m-3'}>
            {this.image(0,id)}
          </div>
        {/* </Slider> */}
      </div>
      </div>
    );
  }
}