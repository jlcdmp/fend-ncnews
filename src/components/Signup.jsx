import React, { Component } from 'react';
import '../css/Signup.css'



class Signup extends Component {
  state = {
    username: '',
    name: '',
    avatar_url: 'https://images-na.ssl-images-amazon.com/images/I/61XFz3GxbYL._SY355_.jpg'
  }
  render() {
    const newuser = { username: this.state.username, name: this.state.name, avatar_url: this.state.avatar_url }
    return (




      <div className="form-store">

        <form className='signup-form' onSubmit={() => this.props.sign(newuser)} >

          <p className="signup-p" > please pick a username</p>
          <input className="signup-input" placeholder="blogsy" onChange={this.handleChange} name='username' ></input>

          <p className="signup-p" > please enter your full name</p>
          <input className="signup-input" onChange={this.handleChange} name='name' placeholder="Joe Bloggs"></input>

          <button className='signup-button' type='submit'>sign up</button>

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