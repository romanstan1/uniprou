import React from 'react';
import { render } from 'react-dom'
import './styles/index.css';
import App from './App';
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import {Provider} from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC2og301S_3Xys9Ca7042pnrbe3HgDIYZo",
    authDomain: "unipro-u.firebaseapp.com",
    databaseURL: "https://unipro-u.firebaseio.com",
    projectId: "unipro-u",
    storageBucket: "",
    messagingSenderId: "235366353258"
  };
  firebase.initializeApp(config);

const history = createBrowserHistory()
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
