import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Item from '../Item'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    }
  }

  handleSend = event => {
    this.setState({ items: [...this.state.items, {text: "try to change me"}]})
    this.props.callBack(this.state);
  }

  render() {
    return (
      <div>
        <ul>
          <li>hello i am an item</li>
          {this.state.items.map((x, i) => <Item key={i} {...x}/>)}
        </ul>
        <button onClick={this.handleSend}>add item</button>
      </div>
    )
  }
}

export default List
