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
}

export default Button;