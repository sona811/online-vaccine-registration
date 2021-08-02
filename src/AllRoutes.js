import React from 'react';
import Login from './login/Login';
import Regform from './regform/Regform';
import Profile from './profile/Profile';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

export class AllRoutes extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={['/login','/']}><Login /></Route>
                    <Route exact path='/register'><Regform /></Route>
                    <Route exact path='/profile'><Profile /></Route> 
                </Switch>
            </BrowserRouter>
        )
    }
}