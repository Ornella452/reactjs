import React from 'react';

class List extends React.Component {

   

    render(){

        
            return(
                <div>

                    List
                 
                    {this.props.items.map((result, index) => (
                        
                             <p key={index}>Hello, {result}</p>

                        
       
    ))}
                   

                    </div>







            )

    }

    
}

export default List;