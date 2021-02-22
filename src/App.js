import 'materialize-css';
import './App.css';
import './component/FontAwesome';

import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './config/Routes';

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;