import React from 'react'
import './index.scss'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.setState({ editMode: false })
    }
  }

  handleChange = event => {
    const { id } = this.props
    const { value } = event.target
    this.setState({
      text: value
    }, this.props.action({ id, value }))
  }

  handleEditClick = event => {
    this.setState({
      editMode: true
    })
  }

  handleConfirmClick = event => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <li className="item">
        {this.state.editMode 
            ? [
              <input type="text" value={this.state.text} onChange={this.handleChange}/>,
              <button onClick={this.handleConfirmClick}>ok?</button>
            ] : [
              <span>{this.state.text}</span>,
              <button onClick={this.handleEditClick}>edit!</button>
            ]
        }
      </li>
    )
  }
}

export default Item
