import React from 'react';
import Slider from './Slider';
import 'rc-slider/assets/index.css';



class Add extends React.Component {

    constructor(){

        super()

        this.state = {
            input: "",
            price: 1
        }

        this.updateInput = this.updateInput.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.submitForm = this.submitForm(this)



    }
 

    updateInput(evt){
        evt.preventDefault()
        this.setState({input: evt.target.value}, () => {
              console.log(this.state.input)
            })
        

    }
    updatePrice(evt){
        this.setState({input : evt.target.value})
        
    }
    submitForm(){
      
        console.log(this.state.input)
        console.log(this.state.price)

    }


    render() {
        return (
            <div className="container">
                <input
                    type="text"
                    onChange={this.updateInput}
                />

                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.updatePrice}
                    value={this.state.price}
                    callback={this.props.callback}
                />

                {this.state.price}€

                <button onClick={this.submitForm}>Add</button>
            </div>

        )

    }

}

export default Add;