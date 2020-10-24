import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/">
                <HomeContainer />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
