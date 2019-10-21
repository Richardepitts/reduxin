import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Title from './components/Title'
import SubTitle from './components/SubTitle'
import Posts from './components/Posts'
import Postform from './components/Postform'

import store from './store'

class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={require('./images/Thinker.png' )} className="App-logo" alt="logo"/>
        <SubTitle />
        <Postform />
          <Posts />
      </header>
    </div>
    </Provider>
    );
  }
}

export default App;
