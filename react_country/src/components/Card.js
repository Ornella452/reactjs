import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div>
                
        <p> name= {this.props.name}</p>
        <p> capital= {this.props.capital}</p>
        <p> flag= {this.props.flag}</p>
        <p> population= {this.props.population}</p>
        <p> region= {this.props.region}</p>
             
            </div>
        )
    }
}

export default Card;