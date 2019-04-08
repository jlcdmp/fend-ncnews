import React, { Component } from 'react';
import { postComment } from './api'
import { navigate } from '@reach/router/lib/history';

class Commentsform extends Component {
  state = {
    body: '',
    author: this.props.user
  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <textarea rows='4' cols='57' onChange={this.handleBody} placeholder='your comment'></textarea>
          <button type='submit' >comment</button>
        </form>
      </div>
    );
  }
  handleSubmit = e => {
    e.preventDefault()
    const { article_id } = this.props
    const comment = { body: this.state.body, author: this.state.author }
    postComment(comment, article_id).then(comment => {
      // navigate(`/articles/${comment.article_id}`)
      e.target.reset()
    })
      .catch(err => {
        return err
      })
  }




  handleBody = e => {
    this.setState({ body: e.target.value })
  }


}

export default Commentsform;