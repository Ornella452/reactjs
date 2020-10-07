import React from 'react'

class MenuPokemon extends React.Component {
    render(){
        return(
            <div className=" row d-flex justify-content-around"  onClick={this.props.onClick} children={this.props.children} forr={this.props.forr} style={{width: 50}}>
                

                
                
            </div>

        );
    }
}
export default MenuPokemon;