import React, { Component } from 'react';
import { Router, Link, navigate } from '@reach/router'
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article'
import ArticleForm from './components/ArticleForm'
import { fetchUser } from './components/api';
import Home from './components/Home'
import { postUser } from './components/api';
import Signup from './components/Signup';


class App extends Component {
  state = {
    user: null,
    username: '',
    signupuser: '',
    name: '',
    avatar_url: 'https://tinyurl.com/yytdvy33',
    pinnedArt: [],
    isHidden: true
  }




  render() {
    if (this.state.user === null) {
      return (
        <div>
          <p>Please sign in</p>
          <form onSubmit={this.handleLoginSubmit} >
            <label></label>
            <input onChange={this.handleLoginUsername} required placeholder='username'></input>
            <br />
            <button type='submit'  >sign in</button>
          </form>
          <br />

          <Link to='/signup'>not got a account?</Link>


          <Router>
            <Signup path='/signup' />
          </Router>
        </div>
      )




    } else {
      return (
        <div className="App">
          <Router>
            <Home path='/home' user={this.state.user} pinned={this.state.pinnedArt} />
            <Articles path='/articles' user={this.state.user} />
            <Article path='/articles/:article_id' user={this.state.user} save={this.handleSave} />
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



  handleSave = (article) => {
    this.setState({ pinnedArt: [...this.state.pinnedArt, article] })
    window.alert('saved to favourites')
  }


  handleClick = e => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
}



export default App;
