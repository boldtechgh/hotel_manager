import React, { Component } from 'react';
import './App.scss';
import Login from './pages/Login/Login.jsx';
import SignUp from './components/sign-up/sign-up.component';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'


class App extends Component{

  render(){
    return(
      <div className="App">
        <Router>
          <Routes>
          <Route exact path="/" element={<Login></Login>} />
            <Route path="/signup" element={<SignUp></SignUp>} />
            </Routes>
        </Router>
    </div>
    );
  }
}

export default App;