import React, {Component} from 'react'
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './src/screens/index'
import login from './src/screens/Login'
import Register from './src/screens/register';

class MainRouter extends Component {
  render() {
    return (
        <NativeRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={Register} />
        </NativeRouter>
      )
  }
}
export default MainRouter
