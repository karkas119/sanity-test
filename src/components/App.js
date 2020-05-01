import React, { Component } from "react";
import {Switch, Router, Route} from "react-router-dom";
import NotesComponent from "./notesComponent";
import LoginComponent from "./loginComponent";
import history from "./history";


class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <React.Fragment>
                        <Route exact path='/' component={NotesComponent} />
                        <Route path='/login' component={LoginComponent} />
                    </React.Fragment>
                </Switch>
            </Router>
    );
    }
}

export default App;