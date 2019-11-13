import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Error from '../Error/Error'
import Home from '../Home/Home'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path = "/:tokenEntered">
            <Home/>           
          </Route>
          <Route path = "*">
            <Error/>
          </Route>
        </Switch>
      </Router>
  )
}

export default App