import React, { Component } from 'react';
import $axios from '../../utils/request'
class Index extends Component {

  componentDidMount(){
    $axios.getRequest($axios.baseURL1+'/api/v1/goods').then(
      (response) => { console.log(JSON.parse(response.shop_data)); },
      error => { console.log(error); }
    )
  }

  render() {
    return (
      <div>
        ...
      </div>
    );
  }
}

export default Index;
