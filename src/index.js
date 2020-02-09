import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
import "./assets/css/my-custom-style.css"

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Switch>
            <Route path="/index" render={props => <Index {...props} />} />
            <Redirect to="/index" />
            <Redirect from="/" to="/index" />
        </Switch>
    </Switch>
</BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
