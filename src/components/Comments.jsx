import React, { Component } from 'react';
import axios from 'axios'

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
        {this.state.comments.map(comment => <p>{comment.body} <br />written by:{comment.author}   votes: {comment.votes} created at: {comment.created_at}</p>
        )}
      </div >
    );
  }








}

export default Comments;