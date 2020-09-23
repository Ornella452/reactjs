import React from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class App extends React.Component {
    render(){
        return(

           < div class = "box col-md-2 col-6"> 
         <span   style={{color: 'red'}}> <Icon name="favorite"></Icon></span>
        
            
         <Slider    max = {this.props.max}
           min= {this.props.min}
           onChange = {this.props.onChange}
           value = {this.props.heart}>
        
            </Slider>

          {this.props.heart}
          
           
           </div>




        )


    }


}
export default App;