import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Item from '../Item'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  handleAddClick = event => {
   this.setState({ items: [...this.state.items, {text: "item"}]})
  }

  render() {
    return (
      <div>
        <ul>
          <li>hello i am an item</li>
          <li>i too am an item</li>
          {this.state.items.map((x, i) => <Item key={i} {...x}/>)}
        </ul>
        <button onClick={this.handleAddClick}>add item</button>
      </div>
    )
  }
}


