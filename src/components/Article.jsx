import { fetchArticle } from './api'
import React, { Component } from 'react';
import { Link } from '@reach/router'
import { voteOnArticle } from './api'
import '../css/Comments.css'
import Comment from './Comments'

const moment = require('moment')


class Article extends Component {
  state = {
    article: '',
    isHidden: true,
    voteChange: 0,
    disbaleButton: false
  }

  async componentDidMount() {
    const article_id = this.props.article_id
    const articles = await fetchArticle(article_id)
    this.setState({ article: articles, voteChange: articles.votes })
  }



  render() {
    const { voteChange } = this.state

    return (
      < article className='article' >
        <Link to='/articles'>Back</Link>
        <p>{this.state.article.title}</p >
        <p>{this.state.article.topic}</p>
        <Link to=''>
          <p>{this.state.article.author}</p>
        </Link>
        <p> Posted:{moment(this.state.article.created_at).fromNow()} </p>
        <p className='articleBody'>{this.state.article.body}</p>
        <p>votes {voteChange}</p>


        <button type='button' onClick={() => this.handleVoteClick(1)}  >
          <span role="img" aria-label="Thumbs-up" > 👍</span>
        </button>

        <button type='button' onClick={() => this.handleVoteClick(-1)}  >
          <span role="img" aria-label="Thumbs-down" > 👎</span>
        </button>

        <p onClick={this.handleCommentClick}>comments</p>
        {this.state.isHidden ? null : <Comment article_id={this.props.article_id} className='commentsection' />}
        <br />
      </article >
    );
  }

  handleCommentClick = e => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleVoteClick = (numOfVotes) => {
    const { article } = this.state
    this.setState({ disbaleButton: true })
    voteOnArticle(article.article_id, numOfVotes)
    this.setState(prevState => ({ voteChange: prevState.voteChange + numOfVotes })
    )
  }

}

export default Article;