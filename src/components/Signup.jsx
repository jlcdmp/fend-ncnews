import React, { Component } from 'react';
import { postUser } from './api';

class Signup extends Component {
  state = {
    username: '',
    name: '',
    avatar_url: 'https://tinyurl.com/yytdvy33'
  }

  render() {
    return (
      <div>
        <p>
          sign up
      </p>
        <form onSubmit={this.handleSubmit}>
          <p>username</p>
          <input onChange={this.handleUsername}></input>
          <p>your name</p>
          <input onChange={this.handleName}></input>

          <p>avatar</p>
          <br />
          <button type='submit'>sign up</button>
        </form>
      </div>
    );
  }

  handleUsername = e => {
    this.setState({ username: e.target.value })
  }

  handleName = e => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const newuser = this.state
    postUser(newuser)
      .then(user => {
        this.setState({})
      })

  }



}

export default Signup;