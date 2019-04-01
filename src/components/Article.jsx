import React, { Component } from 'react';
import axios from 'axios'
import { Link } from '@reach/router'

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
    this.fetchComment()
  }

  render() {
    return (
      <div>
        <h2>{this.state.article.title}</h2 >
        <h4>{this.state.article.topic}</h4>
        <h4>{this.state.article.body}</h4>
        <h5>Written by:{this.state.article.author}</h5>
        <h6>Created at :{this.state.article.created_at} </h6>
        <h5>Votes:{this.state.article.votes}</h5>
        <h5><Link to={`/articles/${this.props.article_id}/comments`}>Comments</Link>:{this.state.article.comment_count}</h5>
      </div>
    );
  }




  fetchComment = () => {
    axios.get(`https://joes-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`)
      .then((comments) => {

        comments.data.comments.map(comment => {
          if (comment.article_id == this.props.article_id)
            return this.setState({ comments: comment })
        })
      })
  }
}

export default Article;