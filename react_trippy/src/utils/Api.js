import React from 'react';
import '../Config'
import { Config } from '../Config';

class Api{
async getHome(){
    fetch(Config.host + "/api/home",{ method: 'GET'})
  .then(res => res.json())
  .then(json => {
    console.log(json)
  });

};
    render() {
        return (
            <div>
               
               
            </div>
        )
    }
    }
    export default new Api();