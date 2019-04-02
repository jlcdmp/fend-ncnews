import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article'
import ArticleForm from './components/ArticleForm'

class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className='title'>nc news</h3>
          <nav className='navbar'>
            <Link to='/' className='navlink' >Home</Link>
            <Link to='/articles' className='navlink' >Articles</Link>
            <Link to='/topics' className='navlink'  >Topics</Link>
            <Link to='users/:user_id' className='navlink'  >Profile</Link>
            <Link to='' className='navlink'>Settings</Link>
          </nav>

          <Router>
            <Home path='/' />
            <Articles path='/articles' />
            <Article path='/articles/:article_id' />
            <Topics path='/topics' />
            <ArticleForm path='/newarticle' />
          </Router>
        </header>
      </div>
    );
  }


}


const Home = () => {
  return (
    <div>
      <p>home</p>

      <p>interactions on content</p>

      <p>interactions on pinned</p>

      <p>treding this week</p>

      <p>hotest this week </p>

      <p>most talked about this week</p>

      <p>new today</p>
    </div>
  )
}


export default App;
