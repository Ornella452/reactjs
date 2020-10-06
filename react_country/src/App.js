import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Card from './components/Card';


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

  componentDidMount() {
    this.handleClick('france')

  }

  handleClick(country) {

    const url = `https://restcountries.eu/rest/v2/name/${country}`;

    fetch(url)
      .then(res => res.json())
      .then(json =>

        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region,
        })

      ).then(console.log('ligne 44 ', this.state))

    console.log('ligne 46', country)
  }



  render() {
    return (
      <div className="App">
        
        <Button onClick={() => this.handleClick('france')}>France</Button>
        <Button onClick={() => this.handleClick('brazil')}>Brazil</Button>
        <Button onClick={() => this.handleClick('croatia')}>Croatia</Button>

        <Card
          name={this.state.name}
          capital={this.state.capital}
          flag={this.state.flag}
          population={this.state.population}
          region={this.state.region}
          flag={this.state.flag}></Card>




      </div>
    );
  }
}

export default App;





























/*import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Card from './components/Card';


class App extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      capital: "",
      flag: "",
      population: 0,
      items: ""

    }

    this.handleClickF = this.handleClickF.bind(this)
    this.handleClickB = this.handleClickB.bind(this)
    this.handleClickC = this.handleClickC.bind(this)

<<<<<<< HEAD
    fetch(country)
=======
  }

  componentDidMount() {

    fetch(`https://restcountries.eu/rest/v2/name/france`)
>>>>>>> 425e23f85889ca4f4b3790c233ec97f688e3ec08
      .then(res => res.json())
      .then(json =>
        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region,
        })
      )
      .then(console.log(this.state));

  }
  handleClickF() {

    fetch(`https://restcountries.eu/rest/v2/name/france`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region,
        })
      )
      .then(console.log(this.state));



  }

  handleClickB() {

    fetch(`https://restcountries.eu/rest/v2/name/brazil`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region,
        })
      ).then(console.log(this.state));

  }
  handleClickC() {

    fetch(`https://restcountries.eu/rest/v2/name/croatia`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region,
        })
      ).then(console.log(this.state));

<<<<<<< HEAD
   // const url = `https://restcountries.eu/rest/v2/name/${ok}`;

    this.handleClick(`https://restcountries.eu/rest/v2/name/france`)

    //console.log(url)
=======
>>>>>>> 425e23f85889ca4f4b3790c233ec97f688e3ec08
  }




  render() {
    return (
      <div className="App">

        <Card
          name={this.state.name}
          capital={this.state.capital}
          flag={this.state.flag}
          population={this.state.population}
          region={this.state.region}></Card>


        <Button onClick={this.handleClickF}>France</Button>
        <Button onClick={this.handleClickB}>Brazil</Button>
        <Button onClick={this.handleClickC}>Croatia</Button>


        {this.state.items === 'france'}
        {this.state.items === 'brazil'}
        {this.state.items === 'croatia'}

      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;




*/


// version sans la méthode componentDidMount

>>>>>>> 425e23f85889ca4f4b3790c233ec97f688e3ec08
