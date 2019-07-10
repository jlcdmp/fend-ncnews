import React, { Component } from 'react';
import { Router, navigate } from '@reach/router'
import { fetchUser, postUser } from './components/api'
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article'
import ArticleForm from './components/ArticleForm'
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login'
import './css/app.css'

class App extends Component {
  state = {
    user: null,
    pinnedArt: [],
    isSignUpShown: false
  }

  render() {
    if (this.state.user === null) {
      return (

        < div className='enter'>

          <div className='test'>
            {this.state.isSignUpShown ?
              <Signup sign={this.handleSignup} /> : <Login log={this.handleLogin} />
            }


            <div className="register">
              <button className='register-button' onClick={this.handleClick} >
                {this.state.isSignUpShown ? null : "Sign Up"}
              </button>
            </div>
          </div>

        </div>

      )

    } else {
      return (

        <div class="App">
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


  handleClick = e => {
    this.setState({ isSignUpShown: true })
  }
  handleLogin = (username) => {
    window.event.preventDefault()
    fetchUser(username).then(user => {
      this.setState({ user: user })
      navigate('/home')
    }).catch(err => {
      alert('invalid username')
    })
  }

  handleSignup = (newuser) => {
    window.event.preventDefault()
    postUser(newuser)
      .then(user => {
        this.setState({ user })
        navigate('/home')
      })
      .catch(err => {
        window.confirm('Username taken')
      })
    window.event.target.reset()
  }

  handleSave = (article) => {
    this.setState({ pinnedArt: [...this.state.pinnedArt, article] })
    window.alert('saved to favourites')
  }
}
export default App;
