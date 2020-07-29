import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageDetail from './PageDetail/PageDetail'
import CssModulePage from './CssModulePage/CssModulePage'
import PageHome from './PageHome/PageHome'
import Page404 from './Page404/Page404'
import PageList from './PageList/PageList'
import PageListAddMore from './PageListAddMore/PageListAddMore'
import PageDetailRDP from './PageDetailRDP/PageDetailRDP'

function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={PageHome} />
      <Route path='/detail' component={PageDetail} />
      <Route path='/detail-rdp' component={PageDetailRDP} />
      <Route path='/css-module' component={CssModulePage} />
      <Route path='/list/:code' component={PageDetailRDP} />
      <Route path='/list' component={PageList} />
      <Route path='/list-add-more' component={PageListAddMore} />
      <Route path='*' component={Page404} />
    </Switch>
  )
}

export default Routes
