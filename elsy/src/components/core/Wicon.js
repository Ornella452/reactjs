import React from 'react';

class Wicon extends React.Component{
    render(){
        return(
            
            <span class="material-icons"  style={{fontSize: 100}}>
            <p>{this.props.name}</p>
            </span>
        )



    }
} 

export default Wicon;