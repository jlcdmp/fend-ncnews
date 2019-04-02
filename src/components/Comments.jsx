import React, { Component } from 'react';
import { BASEURL } from './base'
import axios from 'axios'
const moment = require('moment')



class Comment extends Component {
  state = {
    comments: [],
    userComment: ''
  }


  componentDidMount() {
    this.fetchComments()
  }

  render() {
    const commentsSection = this.state.comments.map(comment =>
      <div className='comment'>
        <p className='commentAuthor'>{comment.author}</p> <p className='commentPosted' > posted: {moment(comment.created_at).fromNow()}</p> <br /> <p className='commentBody' > {comment.body} </p> <br /> <p className='commentVotes' >votes: {comment.votes}</p> <button type='button'>👍</button> <button type='button'>👎</button> <br />
      </div>
    )



    return (
      <div>
        {commentsSection}
        <p>comment</p>
        <form onSubmit={this.handleSubmit}>
          <textarea rows='3' cols='50' onChange={this.handleChange}></textarea>
          <button type='submit'>add</button>
        </form>

      </div>
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

  handleSubmit = e => {
    e.preventDefault()
    this.addComment()
  }

  handleChange = e => {
    this.setState({ userComment: e.target.value })
  }


  addComment = () => {
    axios.post(`${BASEURL}/articles/${this.props.article_id}/comments`, this.state.userComment)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }


}

export default Comment;