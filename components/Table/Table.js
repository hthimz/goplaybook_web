import React from 'react';
import { mainTab, Tab, inTab, hl } from './styles';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

export default class Table extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        headerList: this.props.headerList,
        tableData: this.props.tableData
      };
    }
  header = [
    'sno',
    'name',
    'phone number',
    'email',
    'verified',
    'status',
    'join date',
  ];
  data = [
    {
      sno: '1',
      name: 'anupam pareek',
      'phone number': '7878789812',
      email: 'test@test.com',
      verified: 'yes',
      status: 'active now',
      'join date': '12/03/2014',
    },
    {
      sno: '2',
      name: 'anupam pareek',
      'phone number': '7878789812',
      email: 'test@test.com',
      verified: 'yes',
      status: 'active now',
      'join date': 'gpb_buttonclick me',
    },
    {
      sno: '3',
      name: 'anupam pareek',
      'phone number': '7878789812',
      email: 'test@test.com',
      verified: 'yes',
      status: 'active now',
      'join date': '12/03/2014',
    },
    {
      sno: '4',
      name: 'anupam pareek',
      'phone number': '7878789812',
      email: 'test@test.com',
      verified: 'yes',
      status: 'active now',
      'join date': '12/03/2014',
    },
    {
      sno: '5',
      name: 'anupam pareek',
      'phone number': '7878789812',
      email: 'test@test.com',
      verified: 'yes',
      status: 'active now',
      'join date': '12/03/2014',
    },
    {
      sno: '6',
      name: 'anupam pareek',
      'phone number': '7878789812',
      email: 'test@test.com',
      verified: 'yes',
      status: 'active now',
      'join date': '12/03/2014',
    },
    {
      sno: '7',
      name: 'anupam pareek',
      'phone number': '7878789812',
      email: 'test@test.com',
      verified: 'yes',
      status: 'active now',
      'join date': '12/03/2014',
    },
  ];
  render() {
    let len = Object.keys(this.props.headerList).length;
    len = parseInt(100/len);
    return (
      <div className= { classNames(mainTab, 'p-3') }>
        {console.log(Object.keys(this.props.headerList).length, len)}
        <div className={classNames(Tab, `d-flex my-2 w-100`)}>
          {Object.values(this.props.headerList).map(el => <div style={{width: `${len}%`}} className={'d-flex justify-content-center'}>{el}</div>)}
        </div>
        <div>
          {Object.values(this.props.tableData).map(el => <div className={classNames(Tab , `d-flex pb-2`)}>
              {Object.values(el).map(elem => {
                if(elem.includes('gpb_button'))
                {
                  elem = elem.replace('gpb_button', '');
                  let buttons = elem.split('#');
                  return (
                    <div className={`d-flex justify-content-center`} style={{width: `${len}%`}}>
                      {buttons.map(e=><button className={'mr-3'}>{e}</button>)}
                    </div>
                );
                }
                return (<div style={{ justifyContent: 'center', width:`${len}%` , display: 'flex', justifyContent: 'center'}}>{elem}</div>);
              })}
            </div>
          )}
          <div className={hl} />
        </div>
      </div>
    );
  }
}
