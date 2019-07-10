import React, { Component } from 'react';
import { postTopic } from './api'
import { navigate } from '@reach/router'
import '../css/Topics.css'

class Topicform extends Component {
  state = {
    slug: '',
    description: '',
    newtopic: ''
  }

  render() {
    return (
      <div className="topic-form-store">

        <form className="topic-form" >

          <input className='slug' onChange={this.handleChange} name='slug' placeholder='Name' ></input>

          <input className='description' onChange={this.handleChange} name='description' placeholder='Description' ></input>

          <button className="post-button" type='submit' onClick={this.handleSubmit}>Post!</button>

        </form>

      </div>
    );
  }

  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({ [key]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const topic = { slug: this.state.slug, description: this.state.description }
    postTopic(topic).then(topic => {
      navigate(`/topics`)
      this.setState({ newtopic: topic })
    })
      .catch(err => {
        console.log(err.response.data.message)
      }
      )
  }

}

export default Topicform;