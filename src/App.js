import React, { Component } from 'react';
import { Router, Link, navigate } from '@reach/router'
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article'
import ArticleForm from './components/ArticleForm'
import { fetchUser } from './components/api';
import Home from './components/Home'
import { postUser } from './components/api';


class App extends Component {
  state = {
    user: null,
    username: '',
    signupuser: '',
    name: '',
    avatar_url: 'https://tinyurl.com/yytdvy33'
  }

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <p>login</p>
          <form onSubmit={this.handleLoginSubmit} >
            <p>username</p>
            <input onChange={this.handleLoginUsername} required ></input>
            <br />
            <button type='submit'  >login</button>
          </form>
          <br />
          <p>not got a account?</p>
          <Link to='/signup'><button>create account</button></Link>

          <p>sign up</p>
          <form onSubmit={this.handleSignupSubmit}>
            <p>username</p>
            <input onChange={this.handleUsername}></input>
            <p>your name</p>
            <input onChange={this.handleName}></input>
            <p>avatar</p>
            <br />
            <button type='submit'>sign up</button>
          </form>
        </div>
      )




    } else {
      return (
        <div className="App">
          <h3 className='title'>nc news</h3>
          <Router>
            <Home path='/home' user={this.state.user} />
            <Articles path='/articles' user={this.state.user} />
            <Article path='/articles/:article_id' user={this.state.user} />
            <Topics path='/topics' />
            <ArticleForm path='/newarticle' user={this.state.user} />
          </Router>
        </div >
      );
    }
  }



  handleLoginSubmit = (e) => {
    e.preventDefault()
    const { username } = this.state
    fetchUser(username).then(user => {
      this.setState({ user: user })
      navigate('/home')
    }).catch(err => {
      alert('invalid username')
    })
  }

  handleLoginUsername = e => {
    this.setState({ username: e.target.value })
  }

  handleUsername = e => {
    this.setState({ signupuser: e.target.value })
  }

  handleName = e => {
    this.setState({ name: e.target.value })
  }



  handleSignupSubmit = e => {
    e.preventDefault()
    const newuser = { username: this.state.signupuser, name: this.state.name, avatar_url: this.state.avatar_url }
    postUser(newuser).then(user => {
      this.setState({ user: user })
    })
  }



}



export default App;
