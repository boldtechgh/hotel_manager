import React, { Component } from 'react';
import './App.scss';
import Login from './pages/Login/Login.jsx';


class App extends Component{

  render(){
    return(
      <div className="App">
       <Login></Login>
    </div>
    );
  }
}

export default App;