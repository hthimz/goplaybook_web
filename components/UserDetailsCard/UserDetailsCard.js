import React from 'react';
import { dropdown, maindiv, inTab, hl } from './styles';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

export default class UserDetailsCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      defaultOption: 'choose one'
    };
    }
  data = {
      "Name": "anupam pareek",
      "Phone Number": "7878789812",
      "Email": "test@test.com",
      "DOB": "12/07/1995",
      "City": {
        "city1": "New Delhi",
        "city2": "Bangalore",
        "city3": "Bombay",
        "city4": "Chennai"
      },
      "OTP": "1234",
      "Gender": {
        "c1": "Male",
        "c2": "Female"
      },
      "Status": {
        "c1": "Active",
        "c2": "Inactive"
      },
      "Profile pic": "www.amazon.server.com/1212.jpg",
      "Verified": "Yes",
      "Join Date": "12/07/2018",
      "Player": "No",
      "Sports": "Cricket, Football, Tennis",
      "Business User": "No"
    }
    _onSelect = element => {
      this.setState({defaultOption: element});
    }
    _dropdown = (data, width=7, i) => {
      console.log('the data is .......', data);
      console.log(typeof(data));
      if(typeof(data)==='string') {
        if(data.includes('www.')) {
          return (
            <div style={{ height: '30px'}} className={'my-2 p-4'}>
              <div style={{borderBottom: '1px solid #aaa'}}>
                <a href='#'>{data}</a>
              </div>
              <div style={{backgroundColor: 'grey', height: '30px', width: '60px'}}>
                Change
              </div>
            </div>
          );
        }
        return (
          <div style={{width:`${width}px`, backgroundColor: 'grey', height: '40px', borderRadius: 3}} className={'my-2 p-2'}>
            {data}
          </div>
        );
      }
      if(typeof(data)==='object')  {
        data = Object.values(data);
      }
      return (
        <select className={classNames('custom-select my-2',dropdown)} style={{width:`${width}px`, backgroundColor: 'grey', height: '40px'}}>
          {data.map(ele=><option value={i} key={i}>{ele}</option>)}
        </select>
      )
    }
  render() {
    let keys = [];
    let flag = false;
    Object.keys(this.data).forEach(function(key) {
      keys.push(key);
    });
    console.log(keys, Object.values(this.data), flag);
    return (
      <div className={classNames('d-flex', maindiv)}>
        <div className={classNames(maindiv)}>
          {keys.map((el,i)=>{
            if(flag===true)  return;
            if(el==="Profile pic") {
              flag=true;
            }
            return (<div className={'d-flex justify-content-between'}>
              <div className={'my-2 p-2'}>
                {el}
              </div>
              <div className={'d-flex justify-content-start'}>
                {this._dropdown(Object.values(this.data)[i], 400)}
              </div>
            </div>);
          })}
        </div>
        <div className={classNames(maindiv)}>
        {keys.map((el,i)=>{
            if(el==="Verified") {
              flag=false;
            }
            if(flag===true)  return;
            return (<div className={'d-flex justify-content-between'}>
              <div className={'my-2 p-2'}>
                {el}
              </div>
              <div className={'d-flex justify-content-start'}>
                {this._dropdown(Object.values(this.data)[i], 370)}
              </div>
            </div>);
          })}
        </div>
      </div>
    );
  }
}
