import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
    render() {
        return (
            <div className="btn-group  mx-2 mt-4">
                <button
                    className="btn btn-outline-primary  border-secondary"
                    onClick={this.props.onClick} children={this.props.children}
                ></button>
            </div>
        )
    }
}

export default Button;