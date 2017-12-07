import React, { Component } from 'react';
import Footer from './components/Footer';
import AppBody from './components/AppBody';
import Header from './components/Header';
import './App.css'
class App extends Component {



  render() {

    return (
      <div className="App">
          <Header />
          <AppBody />
          <Footer />
      </div>
    );
  }
}

export default App;
