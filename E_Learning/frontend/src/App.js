import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
class App extends Component {
  state = {users: []}
  render() {
    return (
      <div className="App">
        <div className='row'>
       <div className='col-lg-12'> <NavBar/> </div>
     </div>
        
      </div>
    );
  }
}

export default App;