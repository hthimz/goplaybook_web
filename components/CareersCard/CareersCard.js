import React from 'react'
import Card from './Card' ;

class CareersCard extends React.PureComponent { 
    
response= {
    "data":[{
            "Image" :"../../assets/careers_python.png",
            "Text" :"Backend Developer(Python)",
            "Link" : 'https://docs.google.com/forms/d/1vvbFMxgxYPDR5XSWyC-wUTtVAF7VVodQ-lOS_faimb0',
            },{
            "Image" :"../../assets/careers_android.png",
            "Text" :"Android Developer",
            "Link":"https://docs.google.com/forms/d/1V3ot8fdrnPy1lJjqhjq7BFYe3qcfI_T2dC4oKWKtPow",
            },
            // {
            // "Image" :"../../assets/careers_python.png",
            // "Text" :"Python Developer"
            // },{
            // "Image" :"../../assets/careers_python.png",
            // "Text" :"Python Developer"
            // },{
            // "Image" :"../../assets/careers_python.png",
            // "Text" :"Python Developer"
            // }
        ]
}

imageInjector = () => {
    let table = [];
    let n=4;
    // Outer loop to create parent
    for (let i = 0; i < (n+2)/3; i++) {
        let children = []
        //Inner loop to create children
        for (let j = 0; j < 3 && this.response.data[3*i+j]!==undefined; j++) {
          children.push(<td style={{margin:'50px'}}><Card Image={this.response.data[3*i+j].Image} Text={this.response.data[3*i+j].Text} Link={this.response.data[3*i+j].Link} /></td>)
        }
        //Create the parent and add the children
        table.push(<tr style={{display:'flex', justifyContent: 'start',width:'80%',height :'350px'}}>{children}</tr>)
      }
      return table;
}

    render() {
    return (
    <div>
        <div className={'d-flex flex-column align-items-center'}>
            {this.imageInjector()}
        </div>
    </div>
    );
    }
}

export default CareersCard;