import React from 'react'
import { footer, btn } from './style';
export default class Footer extends React.PureComponent {

    render() {
        console.log(this.props);
        return (
    <div>
        <div className={footer}>
            <button className={btn} onClick={()=>this.props.navigate('/careers')}>Careers</button>
            <button className={btn}>Contact Us</button>
            <button className={btn}>About Us</button>
            <button className={btn}>Register Ground</button>
            <button className={btn}>Host a Tournament</button>
        </div>
        <div style={{display:'flex',justifyContent :'center', backgroundColor:'#000000', color:'white', fontSize:'13px', padding:'5px'}}>
            copyright 2018 Goplaybook Pvt Ltd
        </div>
    </div>     
    );
    }
}
