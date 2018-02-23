import React from 'react'
import Link from 'gatsby-link'

import List from '../components/List'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  handleChange = event => {
    this.setState({ text: event.target.value })
  }
  handleSend = event => {
    let data = { root: this.state.text };
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:4040/save", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }
  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.text}
          name="test"
          cols="30"
          rows="10"
        >
        </textarea>
        <button onClick={this.handleSend}>send</button>
      <List />
      </div>
    )
  }
}

export default IndexPage
