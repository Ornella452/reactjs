import React, { Component } from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';


// déclaration de mes variables etape 1 

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends Component {
  
  render() {
    return (
      <div>
             <Person></Person>
             <HeartRate heart = {MIN_HEART}></HeartRate>

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
