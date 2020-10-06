import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pokemon extends React.Component {

pokedexImg(){


}



    render() {
        return (
            <div>

                <p>name={this.props.name}</p>
                <p>height={this.props.height}</p>
                <p>weight={this.props.weight}</p>
                <p> type={this.props.type}</p>
                <img src={this.props.src}></img>

            </div>

        );
    }
}

export default Pokemon;