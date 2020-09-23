import React from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class Person extends React.Component {
    render() {
        return (

            
            <div class='box col-md-2 col-6' style={{color: 'black'}}>
            <Icon name="directions_walk"></Icon>
            <Slider    max = {this.props.max}
           min= {this.props.min}
           onChange = {this.props.onChange}
           value = {this.props.steps}>
        
            </Slider>
            <p>Steps : {this.props.steps}</p>

            </div>

        );
    }


}

export default Person;

