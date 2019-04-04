import { fetchComments } from './api'
import React, { Component } from 'react';
import Commentsection from './Commentsection'
import Commentsform from './Commentsform';

class Comment extends Component {
  state = {
    comments: [],
    isHidden: true,
  }


  async componentDidMount() {
    const comments = await fetchComments(this.props.article_id)
    return this.setState({ comments: comments })

  }

  render() {
    return (
      <>
        <select>
          <option>newest</option>
          <option>most likes</option>
          <option>most dislikes</option>
        </select>
        <Commentsform article_id={this.props.article_id} user={this.props.user.username} />

        <Commentsection comments={this.state.comments} />
      </>
    );
  }

}

export default Comment;