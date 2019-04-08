import React, { Component } from 'react';
import { Link, navigate } from '@reach/router'
import { postArticle } from './api';
import Navbar from './Navbar';

class ArticleForm extends Component {
  state = {
    title: '',
    body: '',
    topic: '',
  }
  render() {

    console.log(this.props.user)

    return (
      <div>
        <Navbar />
        <h2>post new article</h2>
        <h6>
          Please provide a title and body, limited to 500 words. Add to an exisiting topic or create your own <Link to='/topics'>here</Link>
        </h6>
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} name='title' required placeholder='title'></input>
          <textarea rows='15' cols='50' onChange={this.handleChange} name='body' required placeholder='your article'></textarea>
          <br />
          <input onChange={this.handleChange} name='topic' required placeholder='topic'></input>
          <br />
          <button type='submit' onSubmit={this.handleSubmit}>post</button>
        </form>
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
    const article = { body: this.state.body, title: this.state.title, topic: this.state.topic, author: this.props.user.user.username }
    postArticle(article).then((article) => {
      console.log(article)

      navigate(`/articles/${article.article_id}`)
    })
      .catch(err => {
        console.log(err.response.data.message)
      })
  }


}

export default ArticleForm;