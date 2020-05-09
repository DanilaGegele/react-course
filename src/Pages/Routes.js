import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageDetail from './PageDetail/PageDetail'
import CssModulePage from './CssModulePage/CssModulePage'

function Routes () {
  return (
    <Switch>
      <Route path='/detail' component={PageDetail} />
      <Route path='/css-module' component={CssModulePage} />
    </Switch>
  )
}

export default Routes
