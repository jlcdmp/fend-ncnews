import { fetchComments, deleteComment } from './api'
import React, { Component } from 'react';
import Commentsection from './Commentsection'
import Commentsform from './Commentsform';

class Comment extends Component {
  state = {
    comments: [],
  }


  async componentDidMount() {
    const comments = await fetchComments(this.props.article_id)
    return this.setState({ comments: comments })

  }

  render() {
    return (
      <>

        <Commentsform article_id={this.props.article_id} user={this.props.user} />

        <Commentsection comments={this.state.comments} user={this.props.user} delete={this.handleDelete} />
      </>
    );
  }




  handleDelete = (comment_id) => {
    if (window.confirm('Are you sure you want to delete this comment?') === true) {
      deleteComment(comment_id).then(() => {
        const deleted = this.state.comments.filter(comment => comment.comment_id !== comment_id)
        this.setState({ comments: deleted })
      })
    }
  }



}

export default Comment;