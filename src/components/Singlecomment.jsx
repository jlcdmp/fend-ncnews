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



        <li className='commentBody' > {comment.body} </li>
        <li className='commentAuthor'>{comment.author}</li>
        <li className='commentPosted' >{moment(comment.created_at).fromNow()}</li>

        {comment.votes > 8 ?
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.467 0c1.102.018 5.555 2.549 6.386 8.558.905-.889 1.409-3.664 1.147-4.843 3.952 2.969 6 6.781 6 11.034 0 5.094-3.43 9.251-8.963 9.251-5.728 0-9.037-3.753-9.037-8.276 0-6.26 5.052-7.62 4.467-15.724zm3.262 19.743c-.749.848-.368 1.945.763 2.045 1.035.093 1.759-.812 2.032-1.792.273-.978.09-2.02-.369-2.893-.998 1.515-1.52 1.64-2.426 2.64zm4.42 1.608c2.49-1.146 3.852-3.683 3.852-6.58 0-2.358-.94-4.977-2.5-7.04-.743 2.867-2.924 3.978-4.501 4.269.05-3.219-.318-6.153-2.602-8.438-.296 4.732-4.321 7.63-4.398 12.114-.029 1.511.514 3.203 1.73 4.415.491.489 1.054.871 1.664 1.16-.121-.608-.062-1.254.195-1.848.911-2.106 3.333-2.321 4.202-5.754.952.749 3.275 3.503 2.778 6.358-.082.469-.224.923-.42 1.344z" /></svg>
          : null}


        <lable className='votes' style={{ 'font-size': '20px' }} >{voteChange}</lable>
        <button type='button' onClick={() => this.handleVoteClick(1)} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.43 8.814c.808-3.283 1.252-8.814-2.197-8.814-1.861 0-2.35 1.668-2.833 3.329-1.971 6.788-5.314 7.342-8.4 7.743v9.928c3.503 0 5.584.729 8.169 1.842 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.649-1.168-2.446-2.594-2.507-1.21-.051-2.87-.277-3.976-.743zm3.718 4.321l-1.394.167s-.609 1.109.141 1.115c0 0 .201.01 1.069-.027 1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.238-.965-4.437-1.934-6.958-2.006v-6c3.263-.749 6.329-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.025 1.455-.051 1.585z" /></svg>
        </button>

        <button type='button' onClick={() => this.handleVoteClick(-1)} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.406 14.442c1.426-.06 2.594-.858 2.594-2.506 0-1-.986-6.373-1.486-8.25-.714-2.689-2.471-3.686-5.009-3.686-2.283 0-4.079.617-5.336 1.158-2.585 1.113-4.665 1.842-8.169 1.842v9.928c3.086.401 6.43.956 8.4 7.744.483 1.66.972 3.328 2.833 3.328 3.448 0 3.005-5.531 2.196-8.814 1.107-.466 2.767-.692 3.977-.744zm-.207-1.992c-2.749.154-5.06 1.013-6.12 1.556.431 1.747.921 3.462.921 5.533 0 2.505-.781 3.666-1.679.574-1.993-6.859-5.057-8.364-8.321-9.113v-6c2.521-.072 4.72-1.041 6.959-2.005 1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062 1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078 1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.874 1.028-.141 1.115l1.394.167c1.075.13 1.105 1.526.05 1.585z" /></svg>
        </button>

        {this.props.user === comment.author ?
          <button onClick={this.handleDelete} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" /></svg>
          </button> : null}
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
