import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sales from './pages/Sales';
import Categorys from './pages/Categorys';
import Products from './pages/Products';
import Reports from './pages/reports';

import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} path='/' exact />
                <Route component={Register} path='/register' />
                
                <Route component={Home} path='/home' />
                <Route component={Sales} path='/sales'  />
                <Route component={Categorys} path='/categorys'  />
                <Route component={Products} path='/products'  />
                <Route component={Reports} path='/reports'  />
            </Switch>

        </BrowserRouter>
    );
}
export default Routes;