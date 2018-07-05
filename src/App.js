import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/about'
import Blog from './components/blog'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Menu from './components/menu'
import Perfil from './components/perfil'
import Stats from './components/stats'
import Works from './components/works'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Perfil/>
        <About/>
        <Header/>
        <Stats/>
      </div>
    );
  }
}

export default App;
