import React from 'react';
import {HashRouter, Route, Switch, Router} from 'react-router-dom';
import Home from './home-page';
import Detail from './detail-page';


const WaterRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);

export default WaterRoute;