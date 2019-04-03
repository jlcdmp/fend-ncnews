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
    const { article_id } = this.props
    const comments = await fetchComments(article_id)
    return this.setState({ comments: comments })

  }

  render() {

    return (
      <>
        <form>
          <textarea rows='4' cols='57'></textarea>
          <button type='submit'>comment</button>
        </form>
        <select>
          <option>newest</option>
          <option>most likes</option>
          <option>most dislikes</option>
        </select>
        <Commentsection comments={this.state.comments} />
      </>
    );
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addComment()
  }

  handleChange = e => {
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