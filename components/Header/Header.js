import React from 'react';
import PropTypes from 'prop-types';
import { maindivHeader, text, logo, textLight, shake } from './styles';
import classNames from 'classnames';

class Header extends React.PureComponent {
  colour = (i,j,val) => {
    return (j-(j-i)*(val));
  }
  colorCalc = val => {
    let r=this.colour(36,47,val); //36 41 47
    let g=this.colour(41,141,val);
    let b=this.colour(43,47,val);
    return ({
      'r': r,
      'g': g,
      'b': b
    });
  }
  render() {
    const col = this.colorCalc(this.props.opacity);
    return (
      <div
        className={classNames(maindivHeader, 'px-4 fixed-top')}
        style={{backgroundColor:`rgba(${col.r}, ${col.g}, ${col.b}, 0.9)`}}
        >
        <div className={"d-flex"}>
          <a href='#about' style={{textDecoration: 'none'}}><div className={textLight}>About Us</div></a>
          <a href='#blogs' style={{textDecoration: 'none'}}><div className={textLight}>Blogs</div></a>
          <div href='#'className={textLight}>Partners Program</div>
        </div>
        <div className={logo}>
          <img src="/assets/goplaybooklogo.png" style={{height:'45px', width:'45px', marginRight: '20px'}} />
          <div className={text}>goplaybook</div>
        </div>
        <div className={logo}>
          <div className={classNames('shake-fixed shake-constant', shake)}>
            <img src="/assets/download_app.png" style={{height:'30px', width:'30px', marginRight:'16px'}} />
          </div>
          <div className={textLight}>Download App</div>
          <a href="https://play.google.com/store/apps/details?id=com.goplaybook&hl=en_US" target="_blank">
            <img src="/assets/playstoreicon.png" style={{height:'30px', width:'30px', marginRight:'16px'}} />
          </a>
          <a href="https://itunes.apple.com/us/app/goplaybook/id1332966913" target="_blank">
            <img src="/assets/appstoreicon.png" style={{height:'30px', width:'30px', marginRight:'16px'}} />
          </a>
        </div>
      </div>
    );
  }
}

Header.propTypes = { currentNav: PropTypes.string };

export default Header;
