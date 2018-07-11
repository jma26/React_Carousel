import React, { Component } from 'react';
import Players from './players';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Players />
            </div>
        );
    }
}

export default Home;