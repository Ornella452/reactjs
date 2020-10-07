import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pokemon extends React.Component {





    render() {
        return (
            <div className="jumbotron " style={{ backgroundColor: "black ", color: "white" }}>

                <p>name : {this.props.name}</p>
                <p>height : {this.props.height}</p>
                <p>weight : {this.props.weight}</p>
                <p> type : {this.props.type}</p>
                <img src={this.props.src}/>

            </div>

        );
    }
}

export default Pokemon;