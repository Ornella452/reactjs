import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'

class App extends Component {

  constructor() {
    super();

    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  state = {
    count : 1,
  }
 
  incrementCount (){
    this.setState({
      count: this.state.count + 1,
      // methode pour incrémenter avec le bouton + la valeur count du state initialiser à 1
    })
  }
  decrementCount (){
    this.setState({
      count: Math.max(this.state.count - 1, 0),
      // Math.max pour ne pas faire -1 -2 -3 ect... max 0 
      // Methode pour décrémenter avec le bouton - la valeur count du state initialiser à 1
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
       
        <Counter stock = {this.state.count}
        // stocker dans la variable stock pour afficher 
        incrementFn = {this.incrementCount}
        decrementFn = {this.decrementCount}>
        </Counter>
        
      </div>
    );
  }
}

export default App;
