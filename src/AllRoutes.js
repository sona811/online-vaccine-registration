import React from 'react';
import Login from '../Login';
import Regform from './Regform';
import Profile from './Profile';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'; 

export class AllRoutes extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login'><Login /></Route>
                    <Route exact path='/register'><Regform /></Route>
                    <Route exact path='/profile'><Profile /></Route> 
                    <Redirect exact path='/login' to= '/profile'><Login/></Redirect>  
                    <Redirect exact path='/login' to= '/register'><Login/></Redirect>  
                </Switch>
            </BrowserRouter>
        )
    }
}

