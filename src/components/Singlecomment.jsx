import React, { Component } from 'react';
import { voteOnComment } from './api'
import { deleteComment } from './api'
const moment = require('moment')

class Singlecomment extends Component {
  state = {
    voteChange: 0
  }


  componentDidMount() {
    this.setState({ voteChange: this.props.comment.votes })
  }



  render() {
    const { comment } = this.props
    const { voteChange } = this.state
    return (
      <ul key={`${comment.comment_id}`} className='commentList'>



        {this.props.user === comment.author ?
          <button onClick={this.handleDelete} >
            <span role='img' aria-label='trash'>🗑</span>
          </button> : null}

        <li className='commentBody' > {comment.body} </li>
        <li className='commentAuthor'>{comment.author}</li>
        <li className='commentPosted' >{moment(comment.created_at).fromNow()}</li>
        {comment.votes > 8 ? <span role="img" aria-label="Fire" style={{ 'font-size': '24px' }} >🔥</span> : null}
        {comment.votes < 0 ? <span role="img" aria-label="Poop" style={{ 'font-size': '20px' }}  >💩</span> : null}
        <lable className='votes' >{voteChange}</lable>
        <button type='button' onClick={() => this.handleVoteClick(1)} >
          <span role="img" aria-label="Thumbs-up" style={{ 'font-size': '19px' }}  >👍</span>
        </button>
        <button type='button' onClick={() => this.handleVoteClick(-1)} >
          <span role="img" aria-label="Thumbs-up" style={{ 'font-size': '19px' }} >👎</span>
        </button>
      </ul>
    );
  }



  handleDelete = e => {
    const comment_id = this.props.comment.comment_id
    window.confirm('Are you sure you want to delete this comment?')
    deleteComment(comment_id).then(alert('comment deleted'))
  }

  handleVoteClick = numOfVotes => {
    const { comment } = this.props
    voteOnComment(comment.comment_id, numOfVotes)
    this.setState(prevState => ({ voteChange: prevState.voteChange + numOfVotes }))



  }
}



export default Singlecomment;
