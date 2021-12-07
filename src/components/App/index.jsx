import React, { Component } from 'react';

import {BrowserRouter,Link,Route,Switch,Redirect} from 'react-router-dom'
import Logo from '../../assets/image/Logo.png'
import What from '../What'
import Home from '../Home'
import './index.css'
class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
        <div className="container" style={{boxShadow: '0px 5px 0px #3F3D56'}}>
          <div className="row">
            <div className="col-md-12 ">
              <div className="row Navbar-height">
                <div className='col-md-1'>
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" width="130" height="80" className="d-inline-block align-text-top"/>
                </a>
                </div>
                <div className="col-md-3 delPadding">
                </div>
                <div className="col-md-2 delPadding">
                  <Link className="other" to="/what">WAHT IS NAVBAR?</Link>
                </div>
                <div className="col-md-1 delPadding">
                  <Link className="other" to="/home">Home</Link>
                </div>
                <div className="col-md-1 delPadding">
                  <Link className="other" to="/#">ABOUT</Link>
                </div>
                <div className="col-md-1 delPadding">
                  <Link className="other" to="/#">US</Link>
                </div>
                <div className="col-md-2 delPadding d-flex justify-content-end">
                  <div className="signIn">
                    SIGN IN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path='/what'component={What}/>
          <Route path='/home'component={Home}/>
          <Redirect to="/what"/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
