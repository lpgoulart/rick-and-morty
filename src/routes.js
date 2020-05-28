import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Characters from './pages/characters'
import Character from './pages/character'
import Main from './pages/main'

const Routes = () => (
    <BrowserRouter>
        <Switch>    
            <Route path="/" exact component={Main} />
            <Route path="/characters" component={Characters} />
            <Route path="/character/:id" component={Character} />
        </Switch>
    </BrowserRouter>
)

export default Routes;