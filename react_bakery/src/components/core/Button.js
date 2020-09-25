import React from 'react';

class Button extends React.Component {
  
    render() {
        return (
            <div>


              <button className="btn btn-outline-primary  border-secondary text-secondary"
              onClick={this.props.onClickFn}>
                  {this.props.isSelected}
              {this.props.children}
            </button>





                


            </div>

   





        )

    }

}

export default Button;