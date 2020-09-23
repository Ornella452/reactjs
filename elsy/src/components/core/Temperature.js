import React from 'react';
import Ticon from './Ticon';
import Slider from './Slider';



class Temperature extends React.Component {
        render(){
            return(

                <div class='box col-md-2 col-6'>
               <span   style={{color: 'yellow'}}><Ticon name="wb_sunny"></Ticon></span> 
               
               
                <Slider    max = {this.props.max}
               min= {this.props.min}
               onChange = {this.props.onChange}
               value = {this.props.temperature}>
            
                </Slider>

              <p>{this.props.temperature} °C </p> 
                </div>
    






            )

        }
}


export default Temperature;