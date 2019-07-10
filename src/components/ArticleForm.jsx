import React, { Component } from 'react';
import { navigate } from '@reach/router'
import { postArticle } from './api';
import Navbar from './Navbar'
import '../css/Post.css'
class ArticleForm extends Component {
  state = {
    title: '',
    body: '',
    topic: '',
  }
  render() {
    return (
      <div class='post' >


        <div className="header">
          <Navbar className='nav' />


          <div className="home-user-store" >
            <img className='user-img' alt="user-img" src={this.props.user.avatar_url} height='40px' width='40px' ></img>
            <p className='user-name' >@{this.props.user.username}</p>
          </div>


        </div>




        <div className="post-store">
          <div className="post-content">
            <div className="post-info">
              <p className="info-title" >New Post Constructor</p>
              <p className="info-body" >Things to remember...</p>
              <ul className="info-list" >
                <li className="info-list-item" >All feilds must be fillled out</li>
                <li className="info-list-item" >keep it clean!</li>
              </ul>
            </div>

            <div className='constructor-store'>

              <form className='post-form' onSubmit={this.handleSubmit} >

                <input className='title' onChange={this.handleChange} name='Title' required placeholder='Title'></input>

                <input className="topic" onChange={this.handleChange} name='Topic' required placeholder='Topic'></input>

                <textarea className="body" spellCheck='true' onChange={this.handleChange} name='Body' required placeholder='Body'></textarea>

                <button className="post-button" type='submit' onSubmit={this.handleSubmit}>Post!</button>


              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({ [key]: value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const article = { body: this.state.body, title: this.state.title, topic: this.state.topic, author: this.props.user.username }
    postArticle(article).then((article) => {
      navigate(`/articles/${article.article_id}`)
    })
      .catch(err => {
        console.log(err.response.data.message)
      })
  }
}
export default ArticleForm;