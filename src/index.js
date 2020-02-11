import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
import "./assets/css/my-custom-style.css"

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Switch>
                <Route path="/" render={props => <App {...props} />} />
                <Redirect to="/" />
            </Switch>
        </Switch>
    </HashRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
