import React from 'react';

class Wicon extends React.Component{
    render(){
        return(
            
            <span class="material-icons"  style={this.props.style}>
            <p>{this.props.name}</p>
            </span>
        )



    }
} 

export default Wicon;