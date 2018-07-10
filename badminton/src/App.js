import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// App Components
import Header from './header';
import Home from './home';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route exact path="/" component = { Home } />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
