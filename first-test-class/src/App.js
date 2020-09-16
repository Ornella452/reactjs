import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/Title'

class App extends Component {
  render() {
    return (
      <div>

        <Title
          name="John"
          age={18}
          languages={['french', 'english']} />

      </div>


    );
  }
}

export default App;
