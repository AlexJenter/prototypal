import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Item from '../Item'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.pages
    }
  }

  handleAddClick = event => {
   this.setState({ pages: [...this.state.pages, {text: "try to change me"}]})
  }

  render() {
    return (
      <div>
        <ul>
          <li>hello i am an item</li>
          <li>i too am an item</li>
          {this.state.pages.map((x, i) => <Item key={i} {...x}/>)}
        </ul>
        <button onClick={this.handleAddClick}>add item</button>
      </div>
    )
  }
}

export default List
