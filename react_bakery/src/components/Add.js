import React from 'react';
import Slider from '../components/Slider';




class Add extends React.Component {

    constructor(){

        super()

        
        this.updateInput = this.updateInput.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.submitForm = this.submitForm.bind(this)

        this.state = {
            input: "",
            price: 1
        }


    }
 

    updateInput(evt){
        this.setState({input: evt.target.value}, () => {
              console.log(this.state.input)
            })
        

    }
    updatePrice(val){
        this.setState({
            price: val
            
        })
        
    }
    submitForm() {
        this.props.callback(this.state.input, this.state.price)
      
    }

    render() {
        return (
            <div className="container">
                <div className="form-inline App p-2 p-3 align-items-center">
                <input className="form-control col-7"
                    type="text"
                    onChange={this.updateInput}
                />
                <button onClick={this.submitForm} className="btn btn-primary">Add</button>
                </div>
               
                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    value={this.state.price}
                    onChange={this.updatePrice}
                    callback={this.props.callback}
                />
                {this.state.price} €
            </div>

        )

    }

}

export default Add;