import React, { Component } from 'react';
import Players from './players';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-headline"> Select a player below! </h1>
                <Players />
            </div>
        );
    }
}

export default Home;