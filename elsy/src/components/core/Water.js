import React from 'react';
import Wicon from './Wicon';
import Slider from './Slider';



class Water extends React.Component {
        render(){
            return(

                <div class='box col-md-2 col-6'>
               <span   style={{color: 'blue'}}><Wicon name="ac_unit"></Wicon></span> 
               
               
                <Slider    max = {this.props.max}
               min= {this.props.min}
               onChange = {this.props.onChange}
               value = {this.props.water}>
            
                </Slider>

               {this.props.water}
                </div>
    






            )

        }
}


export default Water;