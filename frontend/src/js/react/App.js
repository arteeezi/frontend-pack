'use strict';

import React, { Component } from "react";
import Tasks from './components/Tasks';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="app__title">Typical to-do list</h1>
                <hr/>
                <Tasks />
            </div>
        );
    }
}

export default App;