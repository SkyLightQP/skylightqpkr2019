import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import 'bulma-timeline/dist/css/bulma-timeline.min.css';

const router = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
