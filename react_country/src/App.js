import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      capital: "dd",
      flag: "",
      population: 0,
      region: "",

    }

    this.componentDidMount = this.componentDidMount.bind(this)


  }




  componentDidMount() {

    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(res => res.json())
      .then(json =>
        this.setState({
          name: json.name,
          capital: json.capital,
          flag: json.flag,
          population: json.population,
          region: json.region,
        }));


  }


  render() {
    return (
      <div className="App">
        <p name={this.state.name}>{this.state.name}</p>
        <p capital={this.state.capital}>{this.state.capital}</p>
        <p flag={this.state.flag}>{this.state.flag}</p>
        <p population={this.state.population}>{this.state.population}</p>
        <p region={this.state.region}>{this.state.region}</p>


      </div>
    );
  }
}

export default App;
