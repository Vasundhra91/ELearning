import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
      {this.state.users.map(user =>
        <div key={user.id}>{user.username}</div>
      )}
        <div className='row'>
       <div className='col-lg-12'> <NavBar/> </div>
     </div>
        
      </div>
    );
  }
}

export default App;