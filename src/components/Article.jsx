import React, { Component } from 'react';
import axios from 'axios'
import { Link } from '@reach/router'
const moment = require('moment')

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
      comments: []
    }

  }
  componentDidMount() {
    axios.get('https://joes-nc-news.herokuapp.com/api/articles')
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
      <div>
        <h2>{this.state.article.title}</h2 >
        <h5>by {this.state.article.author}</h5>
        <h6> Posted:{moment(this.state.article.created_at).fromNow()} </h6>
        <h4>{this.state.article.topic}</h4>
        <h4>{this.state.article.body}</h4>
        <h5>Votes:{this.state.article.votes} <button type='button'>👍</button> <button type='button'>👎</button></h5>
        <h5><Link to={`/articles/${this.props.article_id}/comments`}>Comments</Link>:{this.state.article.comment_count}</h5>
      </div>
    );
  }




}

export default Article;