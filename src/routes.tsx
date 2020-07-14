import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Login} path='/' exact />

            <Route component={Home} path='/sales' exact />



            <Route component={Home} path='/home' />
            <Route component={Register} path='/register' />
        </BrowserRouter>
    );
}
export default Routes;