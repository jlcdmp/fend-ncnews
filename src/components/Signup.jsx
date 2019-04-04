import React, { Component } from 'react';
import { postUser } from './api';

class Signup extends Component {
  state = {
    username: ''
  }

  render() {
    return (
      <div>
        <p>
          sign up
      </p>
        <form>
          <p>username</p>
          <input onChange={this.handleUsername}></input>
          <br />
          <button type='submit' onClick={this.handleSubmit}>sgn up</button>
        </form>
      </div>
    );
  }

  handleUsername = e => {
    this.setState({ username: e.target.value })
  }

  handleSubmit = e => {
    const { username } = this.state
    postUser(username)

  }



}

export default Signup;