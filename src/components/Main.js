import React, { Component } from 'react';
import {connect} from 'react-redux'
import Nav from './Nav'
import AMPdocument from './AMPdocument'

class Main extends Component {

  render() {
    return (
      <div id='main'>
        <Nav/>
        <AMPdocument/>
      </div>
    )
  }
}



export default connect(state => ({
}))(Main)
