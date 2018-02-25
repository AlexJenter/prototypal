import React from 'react'
import Link from 'gatsby-link'
import data from '../data/db.yaml'
import List from '../components/List'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  componentWillMount() {
    this.setState({ data })
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSend = event => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:4040/save", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(this.state.data));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSend}>send</button>
        <List {...data}/>
      </div>
    )
  }
}

export default IndexPage
