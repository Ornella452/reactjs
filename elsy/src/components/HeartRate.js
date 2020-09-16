import React from 'react';
import Icon from './core/Icon';
class App extends React.Component {
    render(){
        return(

           < div class = "box col-md-2 col-6"> 
         <span> <Icon name="favorite"></Icon></span>
           
            <p  style={{color: 'black'}}>Heart : {this.props.heart}</p>
           
           </div>




        )


    }


}
export default App;