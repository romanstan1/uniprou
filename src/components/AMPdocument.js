import { Component } from 'react';
import {connect} from 'react-redux'

class AMPdocument extends Component {

  container = document.getElementById('AMPcontainer');
  
  ampReadyPromise = new Promise(resolve => {
    return (window.AMP = window.AMP || []).push(resolve);
  });

  appendAmpDocument = (doc,url) => {
    this.ampReadyPromise.then(AMP => {
      AMP.attachShadowDoc(this.container, doc, url)
    })
  }

  componentDidMount() {

    var url = 'http://localhost:5000/unipro-u/us-central1/showPage/sdhjs'
    fetch(url)
    .then(res => res.text())
    .then(res => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(res, "text/html")
      this.appendAmpDocument(doc,url)
    })
    .catch((error)=> {
      console.log("error: ",error)
    })
  }

  render() {
    return true
  }
}



export default connect(state => ({
}))(AMPdocument)
