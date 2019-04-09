import React, { Component } from 'react';
class Login extends Component {
  state = {
    username: '',
  }
  render() {
    return (
      <div className='login'>
        <p>Please sign in</p>
        <form onSubmit={() => this.props.log(this.state.username)} >
          <label></label>
          <input onChange={this.handleChange} name='username' required placeholder='username'></input>
          <button type='submit'  >sign in</button>
        </form>
      </div >
    );
  }
  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({ [key]: value })
  }
}
export default Login;