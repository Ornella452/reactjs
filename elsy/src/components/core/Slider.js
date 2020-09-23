import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class SliderApp extends React.Component {
    render() {
        return (

            <div className = 'App'>
                <RCSlider  max ={this.props.max}
               min={this.props.min}
              onChange = {this.props.onChange}
                value ={this.props.value}>
            

                </RCSlider>


            </div>


        );


    }



}

export default SliderApp;