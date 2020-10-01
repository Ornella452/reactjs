import React from 'react';

class List extends React.Component {

   

    render(){

        
            return(
                <div>

                    List
                 
                    {this.props.items.map((e) => {
                        
                 return <ul key={e}>{e.price} and {e.input}</ul>
                 

       
                     })}
                   

                    </div>





            )

    }

    
}

export default List;