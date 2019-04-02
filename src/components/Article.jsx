import { BASEURL } from './base'
import '../css/Comments.css'
import React, { Component } from 'react';
import axios from 'axios'
import { Link } from '@reach/router'
const moment = require('moment')


class Article extends Component {
  state = {
    article: '',
    comments: []
  }

  componentDidMount() {
    axios.get(`${BASEURL}/articles/`)
      .then((articles) => {
        articles.data.articles.map(article => {
          if (article.article_id == this.props.article_id) {
            this.setState({ article: article })
          }
        })
      })
    this.fetchComments()
  }

  render() {
    const commentsSection = this.state.comments.map(comment =>
      <div>
        <p className='commentAuthor'>{comment.author}</p> <p>posted: {moment(comment.created_at).fromNow()}</p> <br /> <p className='commentBody' > {comment.body} </p> <br /> <p>votes: {comment.votes}</p> <button type='button'>👍</button> <button type='button'>👎</button> <br />
      </div>
    )
    return (
      < div >
        <p>{this.state.article.title}</p >
        <p>{this.state.article.topic}</p>
        <Link to=''>
          <p>{this.state.article.author}</p>
        </Link>
        <p> Posted:{moment(this.state.article.created_at).fromNow()} </p>
        <p>{this.state.article.body}</p>
        <p>{this.state.article.votes} <button type='button'>👍</button> <button type='button'>👎</button></p>
        <div>{commentsSection}</div>
      </div >
    );
  }

  fetchComments = () => {
    axios.get(`${BASEURL}/articles/${this.props.article_id}/comments`)
      .then((comments) => {
        comments.data.comments.map(comment => {
          if (comment.article_id == this.props.article_id)
            return this.setState({ comments: comments.data.comments })
        })
      })
  }



}

export default Article;