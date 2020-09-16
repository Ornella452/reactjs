import React from 'react';
import Icon from './core/Icon';
class App extends React.Component {
    render(){
        return(

           < div class = "box col-md-2 col-6"  style={{color: 'red'}}> 
         
            <Icon name="favorite"></Icon>
            <p>Heart : {this.props.heart}</p>
           
           </div>




        )


    }


}
export default App;