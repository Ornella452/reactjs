import React from 'react';

class Ticon extends React.Component{
    render(){
        return(
            
            <span class="material-icons"  style={{fontSize: 100}}>
            <p>{this.props.name}</p>
            </span>
        )



    }
} 

export default Ticon;