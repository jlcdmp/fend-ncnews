import React, { Component } from 'react'
import { Link } from '@reach/router'

class Login extends Component {
  state = {}

  render() {
    return (
      <div>
        <p>login</p>
        <form>
          <p>username</p>
          <input></input>
        </form>

        <Link to='/signup'>sign up</Link>
      </div>
    );
  }
}

export default Login;