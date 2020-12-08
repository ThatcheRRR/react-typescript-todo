import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../NavBar';
import About from '../About';
import Todos from '../Todos';

const App: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Todos} />
                <Route path="/about" component={About} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;
