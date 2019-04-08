import { Link } from "@reach/router"
import { deleteArticle } from './api'
import React, { Component } from 'react';
import { navigate } from "@reach/router/lib/history";
const moment = require('moment')

class Singlearticle extends Component {
  state = {
  }

  render() {
    const regex = /(days|day|hours|hour|seconds|second)/
    return (
      <li className='articleitemblock' key={this.props.article.article_id}>
        {moment(this.props.article.created_at).fromNow().includes('hours') === true && this.props.article.votes > 5 ? <span role='img' aria-label="Bolt" >⚡</span> : null}

        <Link className='articleitem' data={this.props.articles.articles} to={`/articles/${this.props.article.article_id}`}>{this.props.article.title}</Link >

        by {this.props.article.author}
        <br />
        {moment(this.props.article.created_at).fromNow()}

        {regex.test(moment(this.props.article.created_at).fromNow()) === true ? <span role="img" aria-label="New" >🆕</span> : null}

        <br />
        votes {this.props.article.votes}
        {this.props.article.votes > 9 ? <span role="img" aria-label="Fire" >🔥</span> : null}
        {"  "}
        comments {this.props.article.comment_count}
        {this.props.article.comment_count > 10 ? <span role="img" aria-label="Mouth"  >👄</span> : null}



        {this.props.article.author === this.props.user ? <button onClick={this.handleDelete} >
          <span role='img' aria-label='trash'>🗑</span> </button> : null}
      </li >
    );
  }

  handleDelete = e => {
    const article_id = this.props.article.article_id
    if (window.confirm('Are you sure you want to delete this article?') === true) {
      deleteArticle(article_id).then(alert('article deleted'))
    } else {
      navigate('/articles')
    }
  }
}

export default Singlearticle;

