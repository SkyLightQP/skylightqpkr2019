import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import 'bulma/css/bulma.css';
import 'bulma-timeline/dist/css/bulma-timeline.min.css';

ReactGA.initialize('UA-69668170-5');

function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

const router = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} onUpdate={logPageView}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
