import React, { Component } from 'react';
import Navbar from './Navbar'
import { Link } from '@reach/router'
import '../css/app.css'
import { fetchArticles } from './api';

class Home extends Component {
  state = {
    userArts: []
  }


  componentDidMount() {
    const search = `?author=${this.props.user.user.username}`
    fetchArticles(search).then(articles => {
      this.setState({ userArts: articles })
    })
  }


  render() {
    return (
      <div >
        <Navbar />
        <header className='homehead'>
          <img className='userpic' src={this.props.user.user.avatar_url} height='40px' width='40px' ></img> <label>{this.props.user.user.username}</label>
        </header>
        <h5>Faviroute articles</h5>
        <ul className='faveList'>
          {this.props.pinned.map(article => {
            return <Link to={`/articles/${article.article_id}`}><li className='fave' >{article.title}</li></Link>
          })}
        </ul>

        <h5>Your articles</h5>
        <ul className='faveList' >
          {this.state.userArts.map(article => {
            return <Link to={`/articles/${article.article_id}`}>
              <li className='fave' >{article.title}</li>
            </Link>
          })}
        </ul>


      </div >
    );
  }





}

export default Home;







