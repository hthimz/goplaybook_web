import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mainTab } from './styles';

export default class SideNavBar extends React.PureComponent {
  render() {
    return (
      <div className={classNames("d-flex flex-column my-6 h-100", mainTab)}>
        {this.props.header.map((ele, index) => (
          <label
            className={"m-4 w-51 d-flex justify-content-center bg-transparent border-0"}
            onClick={() => this.props.sideNavHandler(index)}
          >
            {ele}
          </label>
        ))}
      </div>
    );
  }
}

SideNavBar.propTypes = {
  header: PropTypes.object,
  sideNavHandler: PropTypes.func,
};
