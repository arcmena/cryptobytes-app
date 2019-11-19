import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { About, Home } from './views';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
    </BrowserRouter>
);

export default Routes;
