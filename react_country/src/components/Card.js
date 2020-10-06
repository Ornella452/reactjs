import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card border-black mb-3 col-sm-6 mx-auto mt-4" style={{width: 250}}>
                <div className="card-img-top">

                    
                <img src={this.props.flag} style={{ width: 200, height: 200 }} alt="pays" />

                </div>

                <div className="mt-4">
                <h3> Name: {this.props.name}</h3>
                <p> Capital: {this.props.capital}</p>
                <p> Population: {this.props.population}</p>
                <p> Region: {this.props.region}
                </p>


                </div>
               

            </div>
        )
    }
}

export default Card;