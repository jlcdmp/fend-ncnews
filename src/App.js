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
          <h1>nc news</h1>
          <nav>
            <Link to='/'>Home </Link>
            <Link to='/articles'>Articles </Link>
            <Link to='/topics'>Topics </Link>
            <Link to='users/:user_id'>My profile </Link>
            <Link to=''>Log-out </Link>
          </nav>

          <Router>
            <Articles path='/articles' />
            <Topics path='/topics' />
            <Home path='/' />
            <Article path='/articles/:article_id' />
            {//  <TopicsSort path='/articles?topic=/:topic_id' />
            }
            <Comments path='articles/:article_id/comments' />
            {//<Author path='articles/?author=/:author_id' />
            }
          </Router>
        </header>
      </div>
    );
  }


}


const Home = () => {
  return (

    <pre>
      .      ___           ___                    ___           ___           ___           ___
      <br />
      .     /\__\         /\  \                  /\__\         /\  \         /\__\         /\  \
      <br />

      .    /::|  |       /::\  \                /::|  |       /::\  \       /:/ _/_       /::\  \
      <br />

      .   /:|:|  |      /:/\:\  \              /:|:|  |      /:/\:\  \     /:/ /\__\     /:/\ \  \
      <br />

      .  /:/|:|  |__   /:/  \:\  \            /:/|:|  |__   /::\~\:\  \   /:/ /:/ _/_   _\:\~\ \  \
      <br />

      . /:/ |:| /\__\ /:/__/ \:\__\          /:/ |:| /\__\ /:/\:\ \:\__\ /:/_/:/ /\__\ /\ \:\ \ \__\
      <br />

      . \/__|:|/:/  / \:\  \  \/__/          \/__|:|/:/  / \:\~\:\ \/__/ \:\/:/ /:/  / \:\ \:\ \/__/
      <br />

      .     |:/:/  /   \:\  \                    |:/:/  /   \:\ \:\__\    \::/_/:/  /   \:\ \:\__\
      <br />

      .     |::/  /     \:\  \                   |::/  /     \:\ \/__/     \:\/:/  /     \:\/:/  /
      <br />

      .     /:/  /       \:\__\                  /:/  /       \:\__\        \::/  /       \::/  /
      <br />

      .     \/__/         \/__/                  \/__/         \/__/         \/__/         \/__/
  </pre>
  )
}


export default App;
