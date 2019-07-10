import React, { Component } from 'react';
import Navbar from './Navbar'
import { Link } from '@reach/router'
import '../css/Home.css'
import { fetchArticles } from './api';


class Home extends Component {
  state = {
    userArts: []
  }

  componentDidMount() {
    const search = `?author=${this.props.user.username}`
    fetchArticles(search).then(articles => {
      this.setState({ userArts: articles })
    })
  }

  render() {
    return (
      <div className="home">


        <div className="header">
          <Navbar className='nav' />


          <div className="home-user-store" >
            <img className='user-img' alt="user-img" src={this.props.user.avatar_url} height='40px' width='40px' ></img>
            <p className='user-name' >@{this.props.user.username}</p>
          </div>


        </div>
        <div className="home-store">
          <div className="home-content">
            <p className="home-p" >Pinned</p>
            <div className='home-pinned-store'>
              <ul className="home-list">
                {this.props.pinned.map(article => {
                  return <Link to={`/articles/${article.article_id}`}>
                    <li className='home-list-item' >{article.title}</li>
                  </Link>
                })}
              </ul>
            </div>
            <br />
            <p className="home-p" >Own</p>
            <div className="home-own-store" >
              <ul className="home-list">
                {this.state.userArts.map(article => {
                  return <Link to={`/articles/${article.article_id}`}>
                    <li className="home-list-item" >{article.title}</li></Link>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;







