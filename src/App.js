import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import Posts from './components/Posts'
import Postform from './components/Postform'

import store from './store'

class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      
        <img src={require('./images/Thinker.png' )} className="App-logo" alt="logo"/>
        <Postform />
        <p>
          Add Your Todos then do them til done!
        </p>
          <hr/>
          <Posts />
  
      </header>
    </div>
    </Provider>
    );
  }
}

export default App;
