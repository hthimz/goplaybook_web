import React, {Component} from 'react';
import { maindiv, search, searchdiv, inputdiv, textInput } from './styles';
// import AddNewUserModal from '../AddNewUserModal/AddNewUserModal';
export default class Search extends Component{
render(){
    return (
        <div className={ maindiv }>
            <div className={ searchdiv }>
                <div id="Search" className={search}>
                    Search
                </div>
                <div className={ inputdiv }>
                <input
                type="text"
                value= {'Search by Name / Phone No / Email'}
                className={ textInput }
                />
                </div>
                <div>
                    <button >Search</button>
                </div>
            </div>
            <div>
                <button>Add New User</button>
            </div>
        </div>
    );
}
};