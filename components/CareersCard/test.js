import React, {Component} from 'react';
import InputPreview from './components/InputPreview';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {setMessage} from './actions/message'
import {apiFetch} from './actions/search';
import Imagedisplay from './components/Imagedisplay';
class App extends Component {
    _onChange = (value) => {
        this.props.setMessage(value);
        // this.props.apiFetch(value);
    }
    onClick =()=>{
        // console.log('aaaaaaaaaaaaa');
        this.props.apiFetch(this.props.message);//.then(this.props.message.result.data.map((e)=>{console.log(e.assets.huge_thumb,'the real MVP')}))

    }
    imageDiv = (url) => {
        return(<div>
        <img style={{height:'300px', width: '300px'}} src={url} />
        </div>);
    }
    imageInjector = () => {
        let table = [];
        // Outer loop to create parent
        for (let i = 0; i < 10; i++) {
        let children = []
        //Inner loop to create children
        
        for (let j = 0; j < 3; j++) {
        children.push(<td style ={{ padding:'80px',border:'none'}}>{this.imageDiv(this.props.listImages[i*3+j])}</td>)
        }
        
        
        //Create the parent and add the children
        table.push(<tr style={{display:'flex', width:'100%',height :'250px'}}>{children}</tr>)
        }
        return table;
        }
        render () {
        console.log(this.props.message);
        return (
        <div >
        <div style={{display:'flex', justifyContetn: 'center' , backgroundColor:'grey', width:'100%', paddingLeft:'600px'}}>
        <InputPreview value={this.props.message} onChange={this._onChange} searchHandler={this.onClick}/>
        </div>
        <div>{this.imageInjector()}</div>
        </div>
        )
        }
    }

    //  export default App;

    const mapStateToProps = (state) => {
        return {
        message : state.messageReducer.message,
        listImages: state.search.imageUrlList
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({
        apiFetch: apiFetch,
        setMessage: setMessage
        }, dispatch);
    }
    export default connect(mapStateToProps, mapDispatchToProps)(App)
    //  export default connect(state => state)(App);
