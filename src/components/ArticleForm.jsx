import React, { Component } from 'react';
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
        <p>post new article</p>
        <form onSubmit={this.handleSubmit} >
          <p>title</p>
          <input onChange={this.handleInput} required ></input>
          <p>body</p>
          <textarea rows='15' cols='50' onChange={this.handleText} required ></textarea>
          <br />
          <p>topic</p>

          {/* <select onClick={this.handleTopic}>
            <option>football</option>
            <option>coding</option>
            <option>cooking</option>
          </select> */}

          <input onChange={this.handleTopic} required ></input>
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