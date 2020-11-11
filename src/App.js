import React, { Component } from 'react';
//Import main component
import Jokegen from "./Jokegen";
//Import app.css for styling
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="App">
                <Jokegen />
            </div>
        )
    }
}

export default App;
