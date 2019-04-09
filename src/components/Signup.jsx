import React, { Component } from 'react';
import '../css/app.css'
class Signup extends Component {
  state = {
    username: '',
    name: '',
    avatar_url: 'https://images-na.ssl-images-amazon.com/images/I/61XFz3GxbYL._SY355_.jpg'
  }
  render() {
    const newuser = { username: this.state.username, name: this.state.name, avatar_url: this.state.avatar_url }
    return (
      <div >
        <h4>
          sign up today!
      </h4>
        <form onSubmit={() => this.props.sign(newuser)} >
          <label>username</label>
          <input onChange={this.handleChange} name='username' ></input>
          <br />
          <label>full name</label>
          <input onChange={this.handleChange} name='name' ></input>
          <br />
          <button type='submit'>sign up</button>
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

export default Signup;