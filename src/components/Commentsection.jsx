import React, { Component } from 'react';
import { voteOnComment } from './api'
const moment = require('moment')


class Commentsection extends Component {
  state = {
    voteChange: 0,
    currentCommentId: null,
    comment: ''
  }




  render() {


    return (
      this.props.comments.map(comment =>
        <ul key='comment.comment_id' className='commentList'>
          <li className='commentAuthor'>{comment.author}</li>
          <li className='commentPosted' >{moment(comment.created_at).fromNow()}</li>
          <li className='commentBody' > {comment.body} </li>
          {comment.votes > 8 ? <span role="img" aria-label="Fire" >🔥</span> : null}
          {comment.votes < 0 ? <span role="img" aria-label="Poop" >💩</span> : null}
          <li className='commentVotes' >{comment.votes}</li>


          <button type='button' onClick={() => this.handleVoteClick(1)} >
            <span role="img" aria-label="Thumbs-up" >👍</span>
          </button>


          <button type='button' onClick={() => this.handleVoteClick(-1)} >
            <span role="img" aria-label="Thumbs-up" >👎</span>
          </button>
        </ul>,
      )

    )
  }

  handleVoteClick = numOfVotes => {
    const { comments } = this.props

    //all ids for all comments, only need id for selected comment
    const comment_id = comments.map(comment => { return comment.comment_id })

    console.log(comment_id)




    voteOnComment(comment_id, numOfVotes)
    this.setState(prevState => ({ voteChange: prevState.voteChange + numOfVotes }))
  }

}

export default Commentsection;
