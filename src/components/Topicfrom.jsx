import React, { Component } from 'react';
import { postTopic } from './api'
import { navigate } from '@reach/router'
import Navbar from './Navbar';

class Topicform extends Component {
  state = {
    slug: '',
    description: '',
    newtopic: ''
  }

  render() {
    return (
      <div>
        <Navbar />
        <p> start a new topic</p>
        <p>Please provide a your topic with a suitbale name and short description</p>
        <form>
          <input onChange={this.handleChange} name='slug' placeholder='topic name' ></input>
          <input onChange={this.handleChange} name='description' placeholder='topic description' ></input>
          <br />
          <button type='submit' onClick={this.handleSubmit} >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" /></svg>
          </button>
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