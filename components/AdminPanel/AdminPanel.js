import React from 'react';

import Card from '../Card/Card';
import { Carousel } from 'react-responsive-carousel';
import UserDetailsCard from '../UserDetailsCard/UserDetailsCard';
import tournamentCard from '../TournamentCard/TournamentCard';

export default class AdminPanel extends React.PureComponent {
 response ={
   "data": [
     {
    "Name": "Avijeet Singh Gumber",
    "Designation": "CEO,GoPlayBook",
    "SportsType": "Football"
    },
    {
      "Name": "Himanshu Tomar",
      "Designation": "SuperHuman",
      "SportsType": "Every Sports"
      },
      {
        "Name": "Anupam Pareek",
        "Designation": "Lead Designer",
        "SportsType": "Playboy"
        }
]
 }

 TournamentCardResponse= {
   "data" :[{
     "Name": "Champions League",
     "Location": "Mumbai",
     "type": "Football"
   },
   {
    "Name": "Roots",
    "Location": "Delhi",
    "type": "Football"
  },{
    "Name": "Times Pro League",
    "Location": "Vishakapatnam",
    "type": "Cricket"
  },
  // {
  //   "Name": "Siri Fort",
  //   "Location": "Punjab",
  //   "type": "Frisby"
  // },{
  //   "Name": "Premier League",
  //   "Location": "Mumbai",
  //   "type": "Football"
  // },{
  //   "Name": "This is to be League",
  //   "Location": "Mumbai",
  //   "type": "Football"
  // }
  ]
 }

  render() {
    
    return (
    // <div className= "d-flex justify-content-around">
    //   {
    //     this.response.data.map(e=>
    //     <Card Name= {e.Name} Designation={e.Designation}  SportsType={e.SportsType} />)
    //   }
    <div>
        <div style={{display : 'flex', justifyContent: 'space-around'}}>
        {
        this.TournamentCardResponse.data.map((e,i)=>{
          return tournamentCard(e)
        })
        }  
    </div>
    </div>
    );
  }
}
