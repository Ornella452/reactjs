import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items: [],

    }

    this.handleClick = this.handleClick.bind(this)


  }

  handleClick() {
    switch (this.setState.onClick) {
      case 'add': return <Add />
      case 'list': return <List />
      case 'pay': return <Pay />
      
    }
  }

  render() {
    return (

      <div className="App btn-group">



        <Button onClick={this.handleClick.bind(this, 'add')}><Add /></Button>
        <Button onClick={this.handleClick.bind(this, 'list')}><List /></Button>
        <Button onClick={this.handleClick.bind(this, 'pay')}><Pay /></Button>
       






      </div>



    )
  }


}

export default App;
