import React from 'react';


class Card extends React.Component {


    render() {
        return (
            <div>
              
                  <img src={this.props.source}
                   alt="image"></img>
             
                
            </div>
        )
    }
    }

    Student.defaultProps = {
        name: '',
        source: 'http://via.placeholder.com/300x200',
        slug: '',

      };

export default Card;