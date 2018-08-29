import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../Header/Header';
import { hero, doubleQuotes, text, careerText, careerText1, careerText2, careerText3 } from './styles';

class CareerBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScrollHeight: 0,
      image: ['live_scoring.png', 'grounds.png', 'user_profile.png','phone_view.png']
    }
  }
  componentDidMount() {
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
  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1);
    return (
      <div className={classNames(hero,'d-flex justify-content-between flex-column')}>
        <Header opacity={opacity}/>
        <div className={'d-flex flex-column justify-content-between h-100'} style={{marginTop:'80px'}}>
            <div className={classNames(careerText, careerText1)} style={{marginLeft: '128px', marginTop: '64px'}}>
                <div className={'d-flex align-items-center'}>
                    <div className={'mr-4'}>career</div>
                    <div className={careerText2}>at</div>
                </div>
                <div className={careerText3}>goplaybook</div>
            </div>
            <div style={{height:'125px', backgroundColor: '#1b1e20'}} className={classNames(doubleQuotes,'w-100 d-flex justify-content-center align-items-center')}>
                &ldquo;
                <div className={text}>Choose a job you love, and you will never have to work a day in your life. </div>
                &rdquo;
            </div>
        </div>
      </div>
    );
  }
}

CareerBanner.propTypes = { currentNav: PropTypes.string };

export default CareerBanner;
