import React from 'react'
import Link from 'gatsby-link'
import { Route, Redirect } from "react-router-dom"
class Page extends  React.Component {
  
  render() {
    console.log(this.props.match);
    const { page } = this.props.match.params;
    return (
      <h1>{page}</h1>
    )
  }
}
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
        <Route
            location={location}
            key={location.key}
            path="/proto/:page"
            component={Page}
        />
      </div>
    )
  }
}

export default IndexPage
