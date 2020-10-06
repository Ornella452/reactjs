import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

const min=1;
const max=10;

class App extends React.Component {

  constructor() {
    super();

    this.addItem = this.addItem.bind(this)
    
    this.state = {
      activeTab: "add",
      items: [],

    }

    

  
  }

  handleClick(activeTab) {
    this.setState({ activeTab })

  }


  addItem(input, price){

    let obj = {
      input:input,
      price:price
     
    }

    let stock = this.state.items
 
    stock.push(obj)

    console.log(this.state.items)

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
         callback={this.addItem}/>}
        {this.state.activeTab === 'list' && <List items={this.state.items}/>}
        {this.state.activeTab === 'pay' && <Pay />}


      </div>

    )
  }

}

export default App;
