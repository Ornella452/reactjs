import React from 'react';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <button onClick={this.props.incrementFn} style= {{width : 300, height : 40, backgroundColor: "green"}}>+</button>
        <button onClick={this.props.decrementFn} style= {{width : 300, height : 40, backgroundColor: "red"}}>-</button>
      
      </div>
    );
  }
}

export default App;