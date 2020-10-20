import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      pokelist: [],
      currentPokemon: null,
      img: ""
    }
    this.pokedex = this.pokedex.bind(this)
  }

  componentDidMount() {

    this.PokemonList()
  }



  PokemonList(){

  // recupérerv les 25 pokemon
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
    .then(response => response.json())
    .then(json => {

      this.setState({

      pokelist: json.results

      })
      console.log('heyy', json.results)
    })
  }


  pokedex(id) {

    fetch(id)
      .then(res => res.json())
      .then(json => {
        this.setState({
          img: `https://pokeres.bastionbot.org/images/pokemon/${json.id}.png`,
          currentPokemon: json
        
        })// end setState

      })
  }
  
  
  render() {
    return (
      <div className="App">

<div className="App">
        <section className="single-poke d-block p-2 bg-dark text-white">
          {this.state.currentPokemon ?
            (<div className="poke-info text-center">
              <img className="col-md-3 col-sm-6 mb-5" src={this.state.img}></img>
              <div className="poke-info position-relative">
                <p><b>Name :</b> {this.state.currentPokemon.name}</p>
                <p><b>Height :</b>{this.state.currentPokemon.height}</p>
                <p><b>Weight :</b>{this.state.currentPokemon.weight}</p>
                <p><b>Type :</b>{this.state.currentPokemon.types[0].type.name}</p>

              </div>
            </div>) :
            (<h1>Please select a pokemon</h1>)
          }
        </section>
        <section className="row">
          {this.state.pokelist.map((elem, index) => {
            return (
              //list de pokemon
              <div onClick={() => this.pokedex(elem.url)} className="card shadow p-4 mb-2 bg-white col-md-3 col-sm-6 mb-5">
                <div className="">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`}  className="col-md-3 col-sm-6 mb-5"></img>
                <p>{elem.name}</p>
                </div>
              </div>
              
            )
          })}
        </section>
      </div>

      </div>


)
  }
}

export default App;


