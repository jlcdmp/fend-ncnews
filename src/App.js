import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Articles from './components/Articles';
import Topics from './components/Topics';

class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to='/articles'>Articles</Link>
            <br />
            <Link to='/topics'>Topics</Link>
            <br />
            <Link to='/'>Home</Link>
          </nav>

          <Router>
            <Articles path='/articles' onClick={this.click} />
            <Topics path='/topics' />
            <Home path='/' />
            <Article path='/:article_id' props={} />

          </Router>
        </header>
      </div>
    );
  }


}


const Home = () => {
  return (
    <p>
      home
    </p>
  )
}


export default App;
