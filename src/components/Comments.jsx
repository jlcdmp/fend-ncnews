import React, { Component } from 'react';
import axios from 'axios'
const moment = require('moment')


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }
  componentDidMount() {
    axios.get(`https://joes-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`)
      .then((comments) => {
        comments.data.comments.map(comment => {
          if (comment.article_id == this.props.article_id)
            return this.setState({ comments: comments.data.comments })
        })
      })
  }




  render() {


    return (
      < div >
        {this.state.comments.map(comment => <p>{comment.author} <br />{comment.body}   votes: {comment.votes} <button type='button'>👍</button> <button type='button'>👎</button><br /> posted: {moment(comment.created_at).fromNow()}</p>
        )}
        <form>
          your comment <input type='text' ></input >
          <button type='button'>comment</button>
        </form>
      </div >

    );
  }








}

export default Comments;