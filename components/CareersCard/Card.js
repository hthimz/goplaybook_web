import React from 'react'

export default class Card extends React.PureComponent { 

    render() {
    return (
    <div>
        <div className={'m-4' }style={{height:'324px', width:'236px', display :'flex', flexDirection:'column', justifyContent:'space-between'}}>      {/* For the cards to be populated in the careers page , including Image of the card and the description */} 
            <div><img src = {this.props.Image} style={{ width:'236px' ,height:'208px'}}/></div>
            <a href={this.props.Link} target='_blank' style={{textDecoration:'none', color: 'black'}}>
            <div style={{width:'236px', height:'77px',borderStyle:'solid',display:'flex', justifyContent:'center', alignItems:'center'}}> 
                <div>{this.props.Text}</div>
            </div>
            </a>
        </div>

    </div>     
    );
    }
}

// export default CardExampleCard;