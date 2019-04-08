import React, { Component } from 'react';
import { postUser } from './api';
import { navigate } from '@reach/router';
import '../css/app.css'


class Signup extends Component {
  state = {
    username: '',
    name: '',
    avatar_url: 'https://tinyurl.com/yytdvy33'
  }

  render() {
    return (
      <div >
        <h4>
          sign up today!
      </h4>
        <form onSubmit={this.handleSubmit} >
          <label>username</label>
          <input onChange={this.handleUsername}></input>
          <label>full name</label>
          <input onChange={this.handleName}></input>
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
        navigate('/home')
      })
      .catch(err => {
        window.confirm('Username taken')
      })
    e.target.reset()

  }



}

export default Signup;