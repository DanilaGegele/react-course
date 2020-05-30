import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageDetail from './PageDetail/PageDetail'
import CssModulePage from './CssModulePage/CssModulePage'
import PageHome from './PageHome/PageHome'
import Page404 from './Page404/Page404'
import PageList from './PageList/PageList'
import PageDetailRDP from './PageDetailRDP/PageDetailRDP'
import PageListAddMore from './PageListAddMore/PageListAddMore'
import PageListPagination from './PageListPagination/PageListPagination'
import PageListPagination2 from './PageListPagination/PageListPagination2'
import PageMouseMove from './PageMouseMove/PageMouseMove'
import PagePopUpWithYoutube from './PagePopUpWithYoutube/PagePopUpWithYoutube'

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
      <Route path='/list-pagination' component={PageListPagination} />
      <Route path='/list-pagination2' component={PageListPagination2} />
      <Route path='/mouse-move' component={PageMouseMove} />
      <Route path='/popup' component={PagePopUpWithYoutube} />
      <Route path='*' component={Page404} />
    </Switch>
  )
}

export default Routes
