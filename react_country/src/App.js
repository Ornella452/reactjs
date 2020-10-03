import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';


class App extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      capital: "",
      flag: "",
      population: 0,
   

    }

   

    
 
  }

  handleClick = (country) => {
  
  

   fetch(country)
   .then(res => res.json())
   .then(json =>
    
     this.setState({
       name: json[0].name,
       capital: json[0].capital,
       flag: json[0].flag,
       population: json[0].population,
       region: json[0].region,
     })
    
     );
     
 console.log(this.state)
 console.log(country)
 
  
  }

  componentDidMount() {

    this.handleClick(`https://restcountries.eu/rest/v2/name/france`)
  }


  render() {
    return (
      <div className="App">

<p> name= {this.state.name}</p>
        <p> capital= {this.state.capital}</p>
        <p> flag= {this.state.flag}</p>
        <p> population= {this.state.population}</p>
        <p> region= {this.state.region}</p>
        <Button onClick={this.componentDidMount.bind(this, 'france')}>France</Button>
        <Button onClick={this.componentDidMount.bind(this, 'brazil')}>Brazil</Button>
        <Button onClick={this.componentDidMount.bind(this, 'croatia')}>Croatia</Button>

      </div>
    );
  }
}

export default App;
