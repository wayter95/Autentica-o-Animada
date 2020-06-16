import React from 'react';
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Login} path='/' exact />
            <Route component={Home} path='/Home' exact />
            <Route component={Register} path='/register' exact />
        </BrowserRouter>
    );
}

export default Routes;