import React from 'react';
import '../css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";


class Formulaire extends React.Component {


  render(){
    return(

    <div className="mb-3 col-md-6">


    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
    <Form.Control
      type="password"
      id="inputPassword5"
      aria-describedby="passwordHelpBlock"
    />
    <Form.Text id="passwordHelpBlock" muted>
      Your password must be 8-20 characters long, contain letters and numbers, and
      must not contain spaces, special characters, or emoji.
    </Form.Text>
                <div className="mb-3 col-md-6">
                <Button color="primary" type="submit">
                  Submit Form
                </Button>


                </div>

                </div>
             
           
          );
        }
      }
export default Formulaire;