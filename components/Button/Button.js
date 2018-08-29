import React from 'react';
import classNames from 'classnames';

export default class AdminPanel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          styleClass: 'choose one'
        };
        if(this.props.styleClass === 'undefined') {
            this.state
        }
        }
    dropdown = (data) => {
          if(typeof(data)==='object')  {
            data = Object.values(data);
          }
          return (
            <select className={classNames('custom-select',this.props.styleClass)}>
              {data.map(ele=><option value={i} key={i}>{ele}</option>)}
            </select>
          )
    }
    render() {
        return (
            <div>
                {
                    (this.props.type === 'dropdown' &&
                    this.dropdown(this.props.options) ) ||
                    <div className={classNames('p-2', this.props.styleClass)}>
                        {data}
                    </div>
                }
            </div>
        );
    }
}

// options, styleClass, onClickHandler
