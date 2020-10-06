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
      src:"",
      
    }

  }



  componentDidMount(){

    this.pokedex('1')
  }

  pokedex(id) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          name: json.name,
          height: json.height,
          weight: json.weight,
          type: json.types[0].type.name,
          src: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
          

        })
        
      })
  }


  render() {
    return (
      <div className="App">

        <Pokemon name={this.state.name}
          height={this.state.height}
          weight={this.state.weight}
          type={this.state.type}
          src={this.state.src}/>
        

        
        <MenuPokemon onClick={() => this.pokedex('1')}><img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('2')}><img src="https://pokeres.bastionbot.org/images/pokemon/2.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('3')}><img src="https://pokeres.bastionbot.org/images/pokemon/3.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('4')}><img src="https://pokeres.bastionbot.org/images/pokemon/4.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('5')}><img src="https://pokeres.bastionbot.org/images/pokemon/5.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('6')}><img src="https://pokeres.bastionbot.org/images/pokemon/6.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('7')}><img src="https://pokeres.bastionbot.org/images/pokemon/7.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('8')}><img src="https://pokeres.bastionbot.org/images/pokemon/8.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('10')}><img src="https://pokeres.bastionbot.org/images/pokemon/10.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('11')}><img src="https://pokeres.bastionbot.org/images/pokemon/11.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('12')}><img src="https://pokeres.bastionbot.org/images/pokemon/12.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('13')}><img src="https://pokeres.bastionbot.org/images/pokemon/13.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('14')}><img src="https://pokeres.bastionbot.org/images/pokemon/14.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('15')}><img src="https://pokeres.bastionbot.org/images/pokemon/15.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('16')}><img src="https://pokeres.bastionbot.org/images/pokemon/16.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('17')}><img src="https://pokeres.bastionbot.org/images/pokemon/17.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('18')}><img src="https://pokeres.bastionbot.org/images/pokemon/8.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('20')}><img src="https://pokeres.bastionbot.org/images/pokemon/19.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('21')}><img src="https://pokeres.bastionbot.org/images/pokemon/21.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('22')}><img src="https://pokeres.bastionbot.org/images/pokemon/22.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('23')}><img src="https://pokeres.bastionbot.org/images/pokemon/23.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('24')}><img src="https://pokeres.bastionbot.org/images/pokemon/24.png" alt="pokemon"></img></MenuPokemon>
        <MenuPokemon onClick={() => this.pokedex('25')}><img src="https://pokeres.bastionbot.org/images/pokemon/25.png" alt="pokemon"></img></MenuPokemon>
      </div>
    );
  }
}

export default App;
