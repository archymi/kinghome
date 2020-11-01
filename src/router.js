import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'

function Router() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    )
};

export default Router;