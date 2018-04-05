import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import data from "../data/db.yaml";
import Nav from '../components/Nav'
import Page from '../components/Page'

export default () => (
  <div>
    <Nav items={data.pages} />
    <Route
      location={location}
      key={location.key}
      path="/proto/:page"
      component={Page}
    />
  </div>
)
