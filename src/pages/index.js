import React from 'react'
import Link from 'gatsby-link'
import data from '../data/db.yaml'
import List from '../components/List'
import Item from '../components/Item'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data
    }
  }

  handleItemChange = data => {
    //this.setState(data)
    const nextItems = this.state.items
    nextItems[data.id] = { text: data.value }
    this.setState({
      items: nextItems,
    })
  }

  handleSend = event => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:4040/save", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(this.state.items));
  }

  render() {
    return (
      <div>
        {this.state.items.map((x, i) => {
          return <Item key={i} id={i} {...x} action={this.handleItemChange} />
        })}
        <button onClick={this.handleSend}>send</button>
      </div>
    )
  }
}

export default IndexPage
