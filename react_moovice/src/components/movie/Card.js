import React from 'react';


class Card extends React.Component {


    render() {
        return (
            <div>
                <div> <p> poster_path={this.props.poster_path}</p></div>
                <p>title={this.props.title}</p>
                <p> overview={this.props.overview}</p>
              
                
            </div>
        )
    }
    }

export default Card