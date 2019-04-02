import { BASEURL } from './base'
import '../css/Comments.css'
import React, { Component } from 'react';
import axios from 'axios'
import { Link } from '@reach/router'
import Comment from './Comments'
const moment = require('moment')


class Article extends Component {
  state = {
    article: '',
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
  }

  render() {
    return (
      < div className='article' >
        <p>{this.state.article.title}</p >
        <p>{this.state.article.topic}</p>
        <Link to=''>
          <p>{this.state.article.author}</p>
        </Link>
        <p> Posted:{moment(this.state.article.created_at).fromNow()} </p>
        <p>{this.state.article.body}</p>
        <p>{this.state.article.votes} <button type='button'>👍</button> <button type='button'>👎</button></p>
        <p>view comments</p>
        <Comment article_id={this.props.article_id} />
        <br />
      </div >
    );
  }
}

export default Article;