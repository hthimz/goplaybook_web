import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../Header/Header';
import { contents, learnMore, bannerText, bannerTextHeader, hero, phone, home, leaf, left, right } from './styles';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      currentScrollHeight: 0,
      image: ['live_scoring.png', 'grounds.png', 'user_profile.png','phone_view.png']
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ screen: (this.state.screen+1)%4 }), 4000);
    window.onscroll =()=>{
      if(window.scrollY<250) {
        this.setState({currentScrollHeight: window.scrollY});
      } else {
        const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
        if (this.state.currentScrollHeight != newScrollHeight){
            this.setState({currentScrollHeight: newScrollHeight})
      }
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  active = i => {
    if (this.state.screen === i) {
      return (
        <img src='/assets/selected.png' style={{width: '36px', height: '36px'}}/>
      );
    } else {
      return (
        <button
          style={{
            width: '30px',
            height: '30px',
            border: 'solid 1px #000000',
            borderRadius: '35px',
            backgroundColor: "transparent",
            outline: 'none'
          }}
          onClick={()=>{
            clearInterval(this.interval);
            return this.setState({screen:i},()=>{
              setTimeout(() => {
                this.interval = setInterval(() => this.setState({ screen: (this.state.screen+1)%4 }), 4000);
              },5000)
            })}
          }
        />
      );
    }
  }
  content = i => {
    // let textColor = this.state.screen === i ? 'white !important' : 'black';
    // console.log('\ni is ', i, '\n state is ', this.state.screen, '\ntextColor is ', textColor)
    switch(i) {
    case 0: return (<div>
                      <div className={bannerTextHeader} style={this.state.screen===0?{color:'white'}:{color:'black'}}>Live Online Scoring</div>
                      <div className={bannerText} style={this.state.screen===0?{color:'white'}:{color:'black'}}>No more pen-paper struggles.Enjoy, doing ball by ball scoring on the goplaybook app.</div>
                      {/* <div className={learnMore}>Learn more.</div> */}
                    </div>);
    case 1: return (<div>
                      <div className={bannerTextHeader} style={this.state.screen===1?{color:'white'}:{color:'black'}}>Grounds</div>
                      <div className={bannerText} style={this.state.screen===1?{color:'white'}:{color:'black'}}>Find All the grounds in your neighbourhood with easy search and book features.</div>
                      {/* <div className={learnMore}>Learn more.</div> */}
                    </div>);
    case 2: return (<div>
                      <div className={bannerTextHeader} style={this.state.screen===2?{color:'white'}:{color:'black'}}>Player Profile</div>
                      <div className={bannerText} style={this.state.screen===2?{color:'white'}:{color:'black'}}>Player Profiles with verified stats and analytics of your sporting career.</div>
                      {/* <div className={learnMore}>Learn more.</div> */}
                    </div>);
    case 3: return (<div>
                      <div className={bannerTextHeader} style={this.state.screen===3?{color:'white'}:{color:'black'}}>Tournaments</div>
                      <div className={bannerText} style={this.state.screen===3?{color:'white'}:{color:'black'}}>Find, Follow and Compete in the best local tournaments exclusively on the app.</div>
                      {/* <div className={learnMore}>Learn more.</div> */}
                    </div>);
    }
  }
  
  bannerNavigator = i => {
    return (
      <div className={classNames("d-flex flex-column justify-content-between h-50")}>
        <div className={classNames(leaf,i<2 ? left:right )} style={this.state.screen === i ? {backgroundColor: '#32a027'}: null}>
          <div className={classNames('d-flex')}>
            {this.active(i)}
            {this.content(i)}
          </div>
        </div>
        <div className={classNames(leaf,i<2 ? left:right )} style={this.state.screen === i+1 ? {backgroundColor: '#32a027'}: null}>
          <div className={classNames('d-flex')}>
            {this.active(i+1)}
            {this.content(i+1)}
          </div>
        </div>
      </div>
    );
  }
  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1);
    return (
      <div className={hero}>
        <Header opacity={opacity}/>
        <div className={classNames("d-flex justify-content-between")}>
          <div className={classNames("d-flex flex-column w-100 justify-content-center align-items-end")}>
            {this.bannerNavigator(0)}
          </div>
          <div className={contents}>
            <div className={home}>Talent meets Recognition</div>
            <img src={`/assets/${this.state.image[this.state.screen]}`} className={phone}/>
          </div>
          <div className={classNames("d-flex w-100 justify-content-start align-items-center")}>
            {this.bannerNavigator(2)}
          </div>
        </div>
      </div>
    );
  }
}

Banner.propTypes = { currentNav: PropTypes.string };

export default Banner;
