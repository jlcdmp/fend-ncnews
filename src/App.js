import React, { Component } from 'react';
import { Router, Link, navigate } from '@reach/router'
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article'
import ArticleForm from './components/ArticleForm'
import Signup from './components/Signup';
import { fetchUser } from './components/api';
import Home from './components/Home'

class App extends Component {
  state = {
    user: null,
    username: '',
    signup: false
  }

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <p>login</p>
          <form onSubmit={this.handleSubmit} >
            <p>username</p>
            <input onChange={this.handleUsername} required ></input>
            <br />
            <button type='submit'  >login</button>
          </form>
          <br />



          <p>not got a account?</p>
          <Link to='/signup'><button>create account</button></Link>

          <Signup />


        </div>
      )




    } else {
      return (
        <div className="App">
          <h3 className='title'>nc news</h3>
          <Router>
            <Home path='/home' />
            <Articles path='/articles' />
            <Article path='/articles/:article_id' user={this.state.user} />
            <Topics path='/topics' />
            <ArticleForm path='/newarticle' user={this.state.user} />
          </Router>
        </div >
      );
    }
  }

  handleUsername = e => {
    this.setState({ username: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { username } = this.state
    fetchUser(username).then(user => {
      this.setState({ user: user.user })
      navigate('/home')
    }).catch(err => {
      alert('invalid username')
    })
  }




}



export default App;
