import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';

const router = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
