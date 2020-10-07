import React from 'react';
import '../css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";


class Formulaire extends React.Component {

  state = {
    email: "",
    password:"",

  }


  render() {
    return (

      <div className="mb-3 col-md-6">

        
<Form.Label htmlFor="inputEmail">Email</Form.Label>
        <Form.Control
        name= "email"
          type="email"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />


        <Form.Label htmlFor="inputPassword5">Password</Form.Label>

        <Form.Control
        name="password"
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
          <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
         <label class="form-check-label" for="exampleCheck1">Check me out</label>

        <div className="mb-3 col-md-12">
          <p></p>
          <Button color="primary" type="submit">
            Envoyé
                </Button>


        </div>

      </div>


    );
  }
}
export default Formulaire;