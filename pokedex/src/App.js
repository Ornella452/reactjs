import React, { Component } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import MenuPokemon from './components/MenuPokemon';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      height: 0,
      weight: 0,
      type: "",
      src: "",

    }
  }
  componentDidMount() {

    this.pokedex('1')
  }

  pokedex(id) {

    fetch(id)
      .then(res => res.json())
      .then(json => {
        this.setState({
          name: json.name,
          height: json.height,
          weight: json.weight,
          type: json.types[0].type.name,
          src: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
        
        })// end setState

      })
  }
  
 /* PokemonList(){

 
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
    .then(response => response.json())
    .then(json => {

      this.setState({

      pokelist: json.results

      })
      console.log('heyy', json.results)
    })
  }
*/
  render() {
    return (

      

      <div className="App">

        <Pokemon name={this.state.name}
          height={this.state.height}
          weight={this.state.weight}
          type={this.state.type}
          src={this.state.src} />

          

<MenuPokemon onClick={() => this.pokedex('1')}><img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="pokemon" /></MenuPokemon>
<MenuPokemon onClick={() => this.pokedex('2')}><img src="https://pokeres.bastionbot.org/images/pokemon/2.png" alt="pokemon" /></MenuPokemon>

    

      </div>


)
  }
}

export default App;
