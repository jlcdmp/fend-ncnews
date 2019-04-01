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
            return this.setState({ comments: comment })
        })
      })
  }

  render() {
    const { comments } = this.state
    const hello = comments.map(comment => comment.body)
    console.log(hello)

    return (
      < div >

      </div >
    );
  }
}

export default Comments;