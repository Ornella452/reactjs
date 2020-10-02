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

}

export default Button;