import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import Topicform from './Topicfrom';

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
      return <li key={topic.slug}><Link to={`/articles?topic=${topic.slug}`} >{topic.slug}</Link></li>
    })
    return (
      <div>
        <ul>{eachtopic}</ul>
        <Topicform />
      </div>

    );
  }






}

export default Topics;