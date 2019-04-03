import { fetchComments } from './api'
import React, { Component } from 'react';
import axios from 'axios'
import Commentsection from './Commentsection'

class Comment extends Component {
  state = {
    comments: [],
    userComment: '',
    userAuthor: '',
    isHidden: true
  }
  async componentDidMount() {
    const article_id = this.props.article_id
    const comments = await fetchComments(article_id)
    comments.map(comment => {
      if (comment.article_id == article_id)
        return this.setState({ comments: comments })
    })
  }

  render() {
    return (
      <div>
        <form>
          <textarea></textarea>
          <button type='submit'>comment</button>
        </form>
        <Commentsection comments={this.state.comments} />
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addComment()
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({ userComment: e.target.value })
  }


  addComment = () => {
    axios.post(`https://joes-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`, this.state.userComment)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }


}

export default Comment;