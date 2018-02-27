import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text,
    }
  }

  handleChange = event => {
    const { id } = this.props
    const { value } = event.target
    this.setState({
      text: value
    }, this.props.action({ id, value }))
  }

  render() {
    return (
      <li>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
      </li>
    )
  }
}

export default Item
