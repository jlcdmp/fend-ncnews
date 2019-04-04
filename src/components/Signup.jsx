import React, { Component } from 'react';

class Signup extends Component {
  state = {}

  render() {
    return (
      <div>
        <p>
          register
      </p>

        <form>
          <p>first name</p>
          <input></input>
          <p>last name</p>
          <input></input>
          <p>username</p>
          <input></input>
          <p>password</p>
          <input></input>
          <br />
          <button>sign up</button>
        </form>

      </div>
    );
  }
}

export default Signup;