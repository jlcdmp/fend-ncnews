import React, { Component } from 'react';
import axios from 'axios';

class Topics extends Component {
  state = {
    topics: []
  }

  componentDidMount() {
    axios.get('https://joes-nc-news.herokuapp.com/api/topics')
      .then((topics) => {
        this.setState({ topics: topics.data.topics })
      })
  }
  render() {
    const { topics } = this.state
    const eachtopic = topics.map(topic => {
      return <li>{topic.slug}</li>
    })
    return (
      <div>
        <ul>{eachtopic}</ul>
      </div>
    );
  }


}

export default Topics;