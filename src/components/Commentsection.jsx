import React from 'react';
const moment = require('moment')

const Commentsection = (props) => {
  return (
    props.comments.map(comment =>
      < div className='comment' >
        <ul key='comment.comment_id' className='commentList'>
          <li className='commentAuthor'>{comment.author}</li>
          <li className='commentPosted' >{moment(comment.created_at).fromNow()}</li>
          <li className='commentBody' > {comment.body} </li>
          {comment.votes > 8 ? <span role="img" aria-label="Fire" >🔥</span> : null}
          {comment.votes < 0 ? <span role="img" aria-label="Poop" >💩</span> : null}
          <li className='commentVotes' >{comment.votes}</li>
          <button type='button'>
            <span role="img" aria-label="Thumbs-up" >
              👍
          </span>
          </button>
          <button type='button'>
            <span role="img" aria-label="Thumbs-up" >
              👎
          </span>

          </button>
        </ul>
      </div >
    )

  );
}

export default Commentsection;