import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
 import home from '../components/views/Home'
import SigninPage from '../components/views/login'
 import SignupPage from '../components/views/signup'
 import AdminPage from '../components/views/Admin'
 import UserPage from '../components/views/User_test'
 import AdminTestPaperPage from '../components/views/testpaper'
export default function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link to="/" className="navbar-brand"><b> E-Learning</b></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/signin'} className="nav-link">Sign In</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/signup'} className="nav-link">Sign Up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/Admin'} className="nav-link">Admin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/AdminTestPaper'} className="nav-link">testpaper</NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink to={'/User_test'} className="nav-link">User</NavLink> */}
            </li>
            {/* <li><div className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div></li> */}

          </ul>

        </div>
      </nav>
      <Switch>
      <Route exact path='/' component={home}/>
      <Route exact path='/signin' component={SigninPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/Admin' component={AdminPage} />
      <Route path='/AdminTestPaper' component={AdminTestPaperPage} />
      <Route path='/User_test' component={UserPage} />
      </Switch>
    </Router>
  )
}
