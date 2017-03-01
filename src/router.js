import React from 'react';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import * as Views from './components';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={Views.App}>
            <IndexRedirect to="/home" />
            
            <Route path="home" component={Views.Home} />

            <Route path="400" component={Views.Forbidden} />
            <Route path="*" component={Views.NotFound} />
        </Route>
    </Router>
);