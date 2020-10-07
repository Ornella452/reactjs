import React from 'react';
import Wicon from './Wicon';
import Slider from './Slider';

const style = {
    color: '#3A85FF',
    fontSize: 100,
}

class Water extends React.Component {
    render() {
        return (

            <div class='box col-md-2 col-6'>
                <Wicon name="local_drink" style={style}></Wicon>

                <p>{this.props.water}L</p>
            </div>







        )

    }
}


export default Water;