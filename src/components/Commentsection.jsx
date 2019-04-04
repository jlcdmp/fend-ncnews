import React, { Component } from 'react';
import Singlecomment from './Singlecomment';


class Commentsection extends Component {
  state = {
    voteChange: 0,
    currentCommentId: null,
    comment: ''
  }

  render() {
    return (
      this.props.comments.map(comment => <Singlecomment comment={comment} />)
    )
  }
}

export default Commentsection;
