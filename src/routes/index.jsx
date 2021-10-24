import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ChatPage from '@pages/ChatPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChatPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
