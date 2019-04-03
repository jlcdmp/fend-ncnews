import { fetchArticle } from './api'
import React, { Component } from 'react';
import { Link } from '@reach/router'
import '../css/Comments.css'
import Comment from './Comments'
const moment = require('moment')


class Article extends Component {
  state = {
    article: '',
    isHidden: true
  }

  async componentDidMount() {
    const articles = await fetchArticle()
    articles.map(article => {
      if (article.article_id == this.props.article_id) {
        this.setState({ article: article })
      }
    })
  }


  render() {
    return (
      < article className='article' >
        <Link to='/articles'>Back</Link>
        <p>{this.state.article.title}</p >
        <p>{this.state.article.topic}</p>
        <Link to=''>
          <p>{this.state.article.author}</p>
        </Link>
        <p> Posted:{moment(this.state.article.created_at).fromNow()} </p>
        <p>{this.state.article.body}</p>
        <p>{this.state.article.votes} <button type='button'>👍</button> <button type='button'>👎</button></p>
        <p onClick={this.handleClick}>comments</p>
        {this.state.isHidden ? null : <Comment article_id={this.props.article_id} className='commentsection' />}
        <br />
      </article >
    );
  }

  handleClick = e => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }




}

export default Article;