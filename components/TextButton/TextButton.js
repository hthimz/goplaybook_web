import React from 'react';
// import { mainTab, Tab, inTab, hl } from './styles';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import Table from '../Table/Table';

export default class TextButton extends React.PureComponent {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       headerList: this.props.headerList,
  //       tableData: this.props.tableData
  //     };
  //   }
  data = {
    "header": { "1":"S.no","2":"Name","3":"StartDate", "4":"EndDate","5":"Matches Created","6":"Action"},
    "data": {
      "1": {
        "Sno": "1",
        "Name": "Gameweek 1",
        "StartDate": "23 June 2018",
        "EndDate": "30 July 2018",
        "Matches Created": "3",
        "Action": "gpb_buttonEdit#Delete"
      },
      "2": {
        "Sno": "2",
        "Name": "Gameweek 2",
        "StartDate": "25 June 2018",
        "EndDate": "30 July 2018",
        "Matches Created": "2",
      },
      "3": {
        "Sno": "3",
        "Name": "Gameweek 3",
        "StartDate": "30 June 2018",
        "EndDate": "30 July 2018",
        "Matches Created": "4",
      },
    }
  }
  
  render() {

    return (
      // <div className= { }>
      // <div style={{fontWeight: bold}}> Gameweek </div>
      // <button>Add GameWeek</button>
      // <div>
      // </div>
      // </div>
      <Table headerList={this.data.header} tableData={this.data.data} />
    );
  }
}
