import React, { Component } from 'react';
import { Link } from '@reach/router'
import { postArticle } from './api';
import Navbar from './Navbar';

class ArticleForm extends Component {
  state = {
    title: '',
    body: '',
    topic: '',
    author: this.props.user.username
  }



  render() {
    return (
      <div>
        <Navbar />
        <h2>post new article</h2>
        <h6>
          Please provide a title and body, limited to 500 words. Add to an exisiting topic or create your own <Link to='/topics'>here</Link>
        </h6>
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleInput} name='title' required placeholder='title'></input>
          <textarea rows='15' cols='50' onChange={this.handleText} name='body' required placeholder='your article'></textarea>
          <br />
          <input onChange={this.handleTopic} name='topic' required placeholder='topic'></input>
          <br />
          <button type='submit' onSubmit={this.handleSubmit}>post</button>
        </form>
      </div>

    );
  }



  handleTopic = e => {
    this.setState({ topic: e.target.value })
  }






  handleInput = e => {
    this.setState({ title: e.target.value })
  }

  handleText = e => {
    this.setState({ body: e.target.value })
  }






  handleSubmit = e => {
    e.preventDefault()
    const article = this.state
    postArticle(article)

  }


}

export default ArticleForm;