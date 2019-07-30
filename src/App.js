import React from 'react';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";

import './App.css';

class App extends React.Component {



  render(){

    return (
    <Wrapper>
        <div className="container">
          <div className="row">
            <p className="text-center"> HEllO REACT </p>
           
          </div>
        </div>
    </Wrapper>
    );
  }
}

export default App;
