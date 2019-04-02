import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article'

class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className='title'>nc news</h3>
          <nav className='navbar'>
            <Link to='/' className='navlink' >Home </Link>
            <Link to='/articles' className='navlink' >Articles </Link>
            <Link to='/topics' className='navlink'  >Topics </Link>
            <Link to='users/:user_id' className='navlink'  >My profile </Link>
            <Link to='' className='navlink' >Log-out </Link>
          </nav>

          <Router>
            <Home path='/' />
            <Articles path='/articles' />
            <Article path='/articles/:article_id' />
            <Topics path='/topics' />
          </Router>
        </header>
      </div>
    );
  }


}


const Home = () => {
  return (
    <p>home</p>
  )
}


export default App;
