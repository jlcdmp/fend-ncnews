import { fetchComments } from './api'
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

        <Commentsection comments={this.state.comments} user={this.props.user} />
      </>
    );
  }

}

export default Comment;