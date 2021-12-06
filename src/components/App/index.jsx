import React, { Component } from 'react';

import {BrowserRouter,Link,Route} from 'react-router-dom'

import Home from '../Home'
import './index.css'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="row Navbar-height">
                <div className="col-md-2 delPadding">
                  <p className="title">NavBar</p>
                </div>
                <div className="col-md-3 delPadding">
                </div>
                <div className="col-md-2 delPadding">
                  <Link className="other">WAHT IS NAVBAR?</Link>
                </div>
                <div className="col-md-1 delPadding">
                  <Link className="other" to="/home">Home</Link>
                </div>
                <div className="col-md-1 delPadding">
                  <Link className="other">ABOUT</Link>
                </div>
                <div className="col-md-1 delPadding">
                  <Link className="other">US</Link>
                </div>
                <div className="col-md-2 delPadding d-flex justify-content-end">
                  <div className="signIn">
                    SIGN IN
                  </div>
                </div>
                <Route path='/home'component={Home}/>
                {/* <Route path='/about'component={About}/> */}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
