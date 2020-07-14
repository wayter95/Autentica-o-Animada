import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Dashboard from './Dashboard';
import Sales from './Sales';

const Routes = () => {
    return(
        <Switch>
         <Route path="/home" exact component={Dashboard} />
         <Route path="/sales" component={Sales} />
        </Switch>
    );
}
export default Routes;