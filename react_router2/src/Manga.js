import React from 'react';
import { withRouter } from 'react-router-dom';

class Manga extends React.Component {
state = {

  nom:"",
  autheur:""

}
componentDidUpdate(){
  fetch(`http://localhost:3000/api/${this.props.match.params.id}.json`)
  .then(res => res.json())
  .then(json => {
    this.setState={
      nom: json.name,
      autheur: json.autheur
    }

    console.log(json)



  });
}


  render() {
    return (


     <div>
        
     
       
      </div>
    );
  }
}

export default withRouter(Manga)


