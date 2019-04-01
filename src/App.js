import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import Articles from './components/Articles';
import Topics from './components/Topics';
import Article from './components/Article'
//import TopicsSort from './components/TopicsSortby'
import Comments from './components/Comments'

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
            <Articles path='/articles' />
            <Topics path='/topics' />
            <Home path='/' />
            <Article path='/articles/:article_id' />
            {//  <TopicsSort path='/articles?topic=/:topic_id' />
            }
            <Comments path='articles/:article_id/comments' />
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
