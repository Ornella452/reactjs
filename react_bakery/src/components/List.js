import React from 'react';

class List extends React.Component {



    render() {


        return (
            
                <div className="App col-md-8 col-8 text-center m-auto p-3 p-md-3">

                    {this.props.items.map((e) => {

                        return  <ul key={e} className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                           {e.input} 
                          <span className="badge badge-primary badge-pill">{e.price}</span>
                        </li> 
                        </ul>

                    })}

                </div>

                






        )

    }


}

export default List;