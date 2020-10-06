import React from 'react'

class MenuPokemon extends React.Component {
    render(){
        return(
            <div className="d-flex justify-content-around"  onClick={this.props.onClick} children={this.props.children}  style={{width: 50}}>

                
                
            </div>

        );
    }
}
export default MenuPokemon;