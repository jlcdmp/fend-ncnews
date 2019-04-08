import { fetchArticle } from './api'
import React, { Component } from 'react';
import { Link } from '@reach/router'
import { voteOnArticle } from './api'
import '../css/Comments.css'
import Comments from './Comments'

const moment = require('moment')


class Article extends Component {
  state = {
    article: '',
    isHidden: true,
    voteChange: 0,
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

        <Link to='/articles'><button>🔙</button></Link>

        <p>{this.state.article.title}</p >

        <p>{this.state.article.topic}</p>

        <Link to={`/users/${this.state.article.author}`}>
          <p>{this.state.article.author}</p>
        </Link>

        <p> Posted:{moment(this.state.article.created_at).fromNow()} </p>

        <p className='articleBody'>{this.state.article.body}</p>

        {voteChange > 10 ? <span>🔥</span> : null}

        <label>{voteChange}</label>
        <button type='button' onClick={() => this.handleVoteClick(1)}  >
          <span role="img" aria-label="Thumbs-up" > 👍</span>
        </button>
        <button type='button' onClick={() => this.handleVoteClick(-1)}  >
          <span role="img" aria-label="Thumbs-down" > 👎</span>
        </button>

        <button type='button' onClick={() => this.props.save(this.state.article)} >
          <span role="img" aria-label="Star" >📎</span>
        </button>


        <p onClick={this.handleCommentClick}>view comments</p>
        {this.state.isHidden ? null : <Comments article_id={this.props.article_id} user={this.props.user.user.username} className='commentsection' />}
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
    voteOnArticle(article.article_id, numOfVotes)
    this.setState(prevState => ({ voteChange: prevState.voteChange + numOfVotes })
    )
  }




}

export default Article;