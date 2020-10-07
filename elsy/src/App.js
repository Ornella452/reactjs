import React, { Component } from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Temperature from './components/core/Temperature';
import Water from './components/core/Water';



// déclaration de mes variables etape 1 

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends Component {


  constructor() {
    super();
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)    ///pour forcer la valeur à changer 
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)


  }

  state = {
    water: 0,
    heart: 120,
    temperature: -10,
    steps: 3000,
  }

  calculateWater(val, element) {


    if (element === 'temperature') {
      console.log('calculette water temperature')
      if (element === 'temperature') {
        console.log('App#calculateWater#Temperature');
        //Si le slider Temperature est au dessus de 20°C
        if (val > 20) {
          if (this.state.heart > 120) {
            if (this.state.steps > 10000) {
              this.setState({
                water: 1.5 + ((val - 20) * 0.02) + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
              })
            } else {
              this.setState({
                water: 1.5 + ((val - 20) * 0.02) + ((this.state.heart - 120) * 0.0008)
              })
            }
          } else {
            if (this.state.steps > 10000) {
              this.setState({
                water: 1.5 + ((val - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)
              })
            } else {
              this.setState({
                water: 1.5 + (val - 20) * 0.02
              })
            }
          }
        } else {
          //Si le slider est en dessous de 20 °C
          if (this.state.heart > 120) {
            if (this.state.steps > 10000) {
              this.setState({
                water: 1.5 + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
              })
            } else {
              this.setState({
                water: 1.5 + ((this.state.heart - 120) * 0.0008)
              })
            }
          } else {
            if (this.state.steps > 10000) {
              this.setState({
                water: 1.5 + ((this.state.steps - 10000) * 0.00002)
              })
            } else {
              this.setState({
                water: 1.5
              })
            }
          }
        }
      } //if (element === 'temperature')

    } if (element === 'steps') {
      console.log('calculette water step')

    }
    if (element === 'heart') {
      console.log('calculette water heart')

      if (val > 120) {
        if (this.state.temperature > 20) {

          if (this.state.steps > 1000) {
            this.state({

              water: 1.5 + ((val - 120) + 0.0008) + ((this.state.temperature - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)

            })

          }
        }

      }

    }



  }
  onHeartChange(val) { // méthode pour changer la valeur du coeur 
    this.calculateWater(val, 'heart')
    this.setState({
      heart: val,

    })
  }

  onStepsChange(val) { // méthode pour changer la valeur du steps
    this.calculateWater(val, 'steps')
    this.setState({
      steps: val,

    })

  }
  onTemperatureChange(val) { // methode pour changer la valeur de la temperature
    this.calculateWater(val, 'temperature')
    this.setState({
      temperature: val,

    })



  }





  render() {
    return (
      <div>


        <Temperature
          temperature={this.state.temperature}
          min={MIN_TEMPERATURE}
          max={MAX_TEMPERATURE}
          onChange={this.onTemperatureChange}
        />

        <Water water={this.state.water}></Water>

        <Person steps={this.state.steps}
          min={MIN_STEPS}
          max={MAX_STEPS}
          onChange={this.onStepsChange}

        ></Person>
        <HeartRate heart={this.state.heart}
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
