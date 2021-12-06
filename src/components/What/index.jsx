import React, { Component } from 'react';

import './index.css'
import what_male from '../../assets/image/what_male.svg'
import what_female from '../../assets/image/what_female.svg'
class Index extends Component {
  render() {
    return (
      <div className="body container-fluid">
        <div className='row'>
          <div className='col-md-5'>
            <img className='what_female' src={what_female} alt="" />
          </div>
          <div className='col-md-1'>
          <span className='position-absolute top-50 start-50 translate-middle'>
              <h1 className='join'>Join us</h1>
              <span className='content'>
                为您提供更好的校园服务
              </span>
              <div className='click'>
                <input className='input' placeholder='Email' type="text" />
              </div>
            </span> 
          </div>
          <div className='col-md-6'>
            <img className='what_male' src={what_male} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;

