<<<<<<< HEAD
import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <div>
                <button
                    className="btn btn-outline-primary  border-secondary"
                    onClick={this.props.onClick} children={this.props.children}
                ></button>
            </div>
        )
    }
=======
import React from 'react';

class Button extends React.Component {

    render() {
        return (
            <div className="btn-group   btn-group-toggle" data-toggle="buttons">


                <button className="btn btn-outline-primary  border-secondary text-secondary"
                    onClick={this.props.onClick} children={this.props.children}>
                </button>


            </div>







        )

    }

>>>>>>> adffa8ff2163dae2e805d7ab0fd391f552bd0a1f
}

export default Button;