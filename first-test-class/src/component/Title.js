import React from 'react';

class App extends React.Component {
    render() {
        return (
            /*  <div>
                  <h2>Name: {this.props.name}</h2>
                
              </div>*/

/*
            <div>
                <p>Age: {this.props.age}</p>
            </div>
            */
           <div>
                <h2>Name: {this.props.name}</h2>
                <p>Age: {this.props.age} years old</p>
                <h2>Languages: {this.props.languages.join(', ')}</h2>
            </div>



        );
    }
}

export default App;