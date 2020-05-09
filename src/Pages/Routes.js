import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageDetail from './PageDetail/PageDetail'
import CssModulePage from './CssModulePage/CssModulePage'
import PageHome from './PageHome/PageHome'
import Page404 from './Page404/Page404'

function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={PageHome} />
      <Route path='/detail' component={PageDetail} />
      <Route path='/css-module' component={CssModulePage} />
      <Route path='*' component={Page404} />
    </Switch>
  )
}

export default Routes
