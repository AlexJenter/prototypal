import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <li>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
      </li>
    )
  }
}

export default Item
