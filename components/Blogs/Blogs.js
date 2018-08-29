import React from 'react';
import tournamentCard from '../TournamentCard/TournamentCard';

export default class Blogs extends React.PureComponent {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  TournamentCardResponse= {
    "data" :[{
      "Name": "Ronaldo Joins Juventus",
      "Location": "21 Aug 2018",
      "type": "Football",
      "image": "../../assets/blog_ronaldo.png"
    },
    {
      "Name": "Roger That! wins",
    "Location": "21 Aug 2018",
    "type": "Football",
    "image": "../../assets/blog_roger.png"
  },{
    "Name": "Eden Hazard Happy to win",
    "Location": "21 August 2018",
    "type": "Football",
    "image": "../../assets/blog_hazard.png"
  }
  ]
  }

 blog = () => {
   return (
    <div id='blogs' style={{background: '#32a027', paddingTop: '50px'}}>
        <div style={{fontSize: '26px',fontWeight: 'bold', fontFamily:'Helvetica Neue', marginLeft:'100px', color:'white'}}>Blogs</div>
              <div style={{display:'flex', paddingTop: '10px', color:'white'}}>
                <div style={{fontFamily:'Roboto', marginLeft:'100px'}}>Read the</div>
                <div style={{fontWeight:'bold'}}>&nbsp;INTERESTING&nbsp;</div>
                <div>sport content on our blogs</div>
            </div>
            <div className={'d-flex flex-column w-100 align-items-center'}>
                <div style={{display : 'flex', justifyContent: 'space-between', width: '70%', marginLeft: '30px'}}>
                {
                this.TournamentCardResponse.data.map((e,i)=>{
                    return tournamentCard(e,2)
                })
                }
                </div>
                <div className={'d-flex w-100 justify-content-center'} style={{color:'white'}}>
                See All {this.state.value===0?'Blogs':'Blogs'} >
                </div>
            </div>
    </div>
    ); }

  render() {
    return (
    <div style ={{width :'100%'}}>
      {
        this.state.value === 0? this.blog() : this.blog()
      }
    </div>
    );
  }
}
