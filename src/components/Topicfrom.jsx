import React, { Component } from 'react';
import { postTopic } from './api'
import Navbar from './Navbar';

class Topicform extends Component {
  state = {
    slug: '',
    description: ''
  }

  render() {
    return (

      <div>
        <Navbar />
        <p> start a new topic</p>

        <form>
          <p>slug</p>
          <input onChange={this.handleSlug}></input>
          <p>description</p>
          <input onChange={this.handleDescription}></input>
          <br />
          <button type='submit' onClick={this.handleSubmit} >add topic</button>
        </form>
      </div>
    );
  }

  handleSlug = e => {
    this.setState({ slug: e.target.value })
  }

  handleDescription = e => {
    this.setState({ description: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const topic = this.state
    postTopic(topic)
  }

}

export default Topicform;