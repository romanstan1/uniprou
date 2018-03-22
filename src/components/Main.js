import React, { Component } from 'react';
import {connect} from 'react-redux'
import Nav from './Nav'



class Main extends Component {

  // fetchDocument_(url) {
  //   return new Promise((resolve, reject) => {
  //     this.xhr_ = new XMLHttpRequest();
  //     this.xhr_.open('GET', url, true);
  //     this.xhr_.responseType = 'document';
  //     this.xhr_.setRequestHeader('Accept', 'text/*');
  //     this.xhr_.onreadystatechange = () => {
  //       if (this.xhr_.readyState < /* STATUS_RECEIVED */ 2) {
  //         return;
  //       }
  //       if (this.xhr_.status < 100 || this.xhr_.status > 599) {
  //         this.xhr_.onreadystatechange = null;
  //         reject(new Error(`Unknown HTTP status ${this.xhr_.status}`));
  //         this.xhr_ = null;
  //         return;
  //       }
  //       if (this.xhr_.readyState === /* COMPLETE */ 4) {
  //         if (this.xhr_.responseXML) {
  //           resolve(this.xhr_.responseXML);
  //         } else {
  //           reject(new Error('No xhr.responseXML'));
  //         }
  //         this.xhr_ = null;
  //       }
  //     };
  //     this.xhr_.onerror = () => { reject(new Error('Network failure')); };
  //     this.xhr_.onabort = () => { reject(new Error('Request aborted')); };
  //     this.xhr_.send();
  //   });
  // }

  fetchDocument = () => {
    fetch('https://us-central1-unipro-u.cloudfunctions.net/showPage/dfsdfkjkldsdsdsf')
    .then((res)=> {
      console.log("res: ",res)
    })
  }

  componentDidMount() {
    fetch('http://localhost:5000/unipro-u/us-central1/showPage')
    // .then(res => res.json())
    .then(res => {
      // console.log("res:", res.body)

      var parser = new DOMParser()
      var el = parser.parseFromString(res, "text/xml");
      console.log("el: ",el)
    })
    .catch((error)=> {
      console.log("error: ",error)
    })
  }

  render() {
    return (
      <div id='main'>
        <Nav/>
        something
      </div>
    )
  }
}



export default connect(state => ({
}))(Main)
