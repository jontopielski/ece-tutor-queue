import React from 'react'
import { Route, HashRouter, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, LogoutContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <BrowserRouter>
      <Switch>
        <MainContainer>
        <Route exact path='/' render={() => {
          return checkAuth() ? <Redirect to='/feed' /> : <HomeContainer /> }} />
        <Route path='/auth' render={() => {
          return checkAuth() ? <Redirect to='feed' /> : <AuthenticateContainer /> }} />
        <Route path='/feed' render={() => {
          return checkAuth() ? <FeedContainer /> : <Redirect to='/auth' /> }} />
        <Route path='/logout' render={() => {
          return <LogoutContainer/> }} />
        </MainContainer>
      </Switch>
    </BrowserRouter>
  )
}
