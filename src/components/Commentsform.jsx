import React, { Component } from 'react';
import { postComment } from './api'
import { navigate } from '@reach/router/lib/history';
import '../css/Comments.css'

class Commentsform extends Component {
  state = {
    body: '',
  }

  render() {
    return (
      <div className='comment-form-store'>
        <form className='comment-form' onSubmit={this.handleSubmit} >
          <textarea onChange={this.handleChange} name='body' placeholder='Join the conversation'></textarea>
          <button type='submit' >Comment</button>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault()
    const { article_id } = this.props
    const comment = { body: this.state.body, author: this.props.user }
    postComment(comment, article_id).then(comment => {
      navigate(`/articles/${comment.article_id}`)
    })
      .catch(err => {
        console.log(err)
      })
    e.target.reset()
  }
  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({ [key]: value })
  }
}
export default Commentsform;