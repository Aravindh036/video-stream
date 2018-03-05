import React, { Component } from 'react';
import './App.css';
import View from './View/View';
import firebase from 'firebase';
import {Switch,Route} from 'react-router-dom';
import Upload from './Upload/Upload';
import Home from './Home/Home';

class App extends Component {
  constructor(props){
    super(props);   
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIW8r2D6lgcEo93FFEW4OUqXVnmD0rNOQ",
    authDomain: "video-stream-e7321.firebaseapp.com",
    databaseURL: "https://video-stream-e7321.firebaseio.com",
    projectId: "video-stream-e7321",
    storageBucket: "video-stream-e7321.appspot.com",
    messagingSenderId: "233292137315"
  };
  firebase.initializeApp(config);

  }
  render() {
    return (
      <Switch>
        <Route path={'/upload'} component={Upload}/>
        <Route path={'/stream'} component={View}/>
        <Route path={'/'} component={Home}/>
      </Switch>    
    );
  }
}

export default App;
