import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';

const App: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" />
                <Route path="/about" />
                <Route path="/" />
            </Switch>
        </Router>
    )
};

export default App;
