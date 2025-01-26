import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo_idcamp from './idcamp.png';
import logo_dicoding from './dicoding.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-add">
        <p className="App-paragraph">
          Ini adalah halaman project react-app sederhana<br/>
          <img className="App-idcamp" src={logo_idcamp}/><br/>
          <img className="App-idcamp" src={logo_dicoding}/>
        </p>
        </div>
      </div>
    );
  }
}

export default App;
