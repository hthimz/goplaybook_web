import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import classNames from 'classnames';
import { center, card ,image, outer, content, header, fix, boxShadow} from './styles'
// import { NewsHeaderCard } from 'react-ui-cards';


export default class CardExampleCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.setstate = 
        {
            Name: this.props.Name ,
            Designation: this.props.Designation,
            SportsType: this.props.SportsType,
            image : this.props.image,
        };
        }
    render() {
        return (
    <div>
    <Card style={{height: '311px', width: '270px'}} className={classNames(boxShadow, card, 'my-5')}>
    <div className={fix}>
        <Image  className={image} src={this.props.image} />
    </div>
    <div className={outer}>
    <Card.Content className= {content}>
        <Card.Header className= {header}>{this.props.Name}</Card.Header>        
            <Card.Meta className= {center}>
            <span>{this.props.Designation}</span>
            </Card.Meta>
            <Card.Description className= {center}>{this.props.SportsType}</Card.Description>   
    </Card.Content>
    </div>
    {/* <Card.Content extra style={{}}>
        <a>
        <Icon name='user'/>
        22 Friends
        </a>
    </Card.Content> */}
    </Card>
            

</div>     
    );
    }
}

// export default CardExampleCard;