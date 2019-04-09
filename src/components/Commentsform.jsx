import React, { Component } from 'react';
import { postComment } from './api'
import { navigate } from '@reach/router/lib/history';

class Commentsform extends Component {
  state = {
    body: '',
  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <textarea rows='4' cols='57' onChange={this.handleChange} name='body' placeholder='your comment'></textarea>
          <button type='submit' >comment</button>
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