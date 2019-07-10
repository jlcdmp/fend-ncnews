import React, { Component } from 'react';
import '../css/Login.css'

class Login extends Component {
  state = {
    username: '',
  }
  render() {
    return (
      <div className='login'>

        <form className='username-form' onSubmit={() => this.props.log(this.state.username)} >
          <input
            className="username-input"
            onChange={this.handleChange}
            name='username'
            required
            placeholder='Username' ></input>
          <button className='enter-button' type='submit'  >Enter</button>
        </form>

      </div>
    );
  }


  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({ [key]: value })
  }
}
export default Login;