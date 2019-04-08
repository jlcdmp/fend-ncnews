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
        <p>Please provide a your topic with a suitbale name and short description</p>
        <form>
          <input onChange={this.handleSlug} placeholder='topic name' ></input>
          <input onChange={this.handleDescription} placeholder='topic description' ></input>
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