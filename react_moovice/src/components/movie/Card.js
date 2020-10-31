import React from 'react';
import PropTypes from 'prop-types';


class Card extends React.Component {


    render() {
        return (
            <div>
                {this.props.poster_path}
                {this.props.title}
                {this.props.overview}


            </div>
        )
    }
}

Card.propTypes = {
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,

};

Card.defaultProps = {
    title: " ",
    overview: " ",
    poster_path: " ",

};

export default Card
