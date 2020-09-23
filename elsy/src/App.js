import React, { Component } from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Temperature from './components/core/Temperature';



// déclaration de mes variables etape 1 

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends Component {


  constructor(){
    super();
    this.onHeartChange = this.onHeartChange.bind(this)
    this.stepsChange = this.stepsChange.bind(this)
    this.temperatureChange = this.temperatureChange.bind(this)
   

  }

  state = {
    water : 0,
    heart : 120,
    temperature : -10,
    steps : 3000,
  }
  
  onHeartChange(val) {
    this.setState({
     heart : val,

    })
  }

  stepsChange(val) {
    this.setState({
     steps : val,

    })
  
  }
  temperatureChange(val) {
    this.setState({
     temperature : val,

    })
  
  }


  render() {
    return (
      <div> 
              <Temperature temperature = {this.state.temperature}
              min={MIN_TEMPERATURE}
              max={MAX_TEMPERATURE}
              onChange={this.temperatureChange}
             
             ></Temperature>

             <Person steps = {this.state.steps}
              min={MIN_STEPS}
              max={MAX_STEPS}
              onChange={this.stepsChange}
             
             ></Person>
             <HeartRate heart = {this.state.heart}
                                min={MIN_HEART}
                                max={MAX_HEART}
                                onChange={this.onHeartChange}
              >
            
             </HeartRate>
             
        <p>Bonjour Ornella</p>
        <div class="container-fluid">

          <ul>
            
            <li>Battements de coeur : {MIN_HEART}</li>
            <li>Température : {MIN_TEMPERATURE}</li>
            <li>Nombre de pas : {MIN_STEPS}</li>
          </ul>
     

        </div>

    

      </div>
    );
  }
}

export default App;
