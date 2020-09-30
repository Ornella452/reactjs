import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

const min = 1;
const max = 10;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items: [],

    }

  
  }

  handleClick(activeTab) {
    this.setState({ activeTab })

  }


  addItem(price, input){

  }


  render() {
    return (

      <div>


        <div>

          <Button onClick={this.handleClick.bind(this, 'add')}
          
            >Add</Button>
          <Button onClick={this.handleClick.bind(this, 'list')}>List</Button>
          <Button onClick={this.handleClick.bind(this, 'pay')}>Pay</Button>



        </div>
        {this.state.activeTab === 'add' && <Add
          min={min}
          max={max}
         callback={this.props.addItem}/>}
        {this.state.activeTab === 'list' && <List />}
        {this.state.activeTab === 'pay' && <Pay />}


      </div>

    )
  }

}

export default App;
