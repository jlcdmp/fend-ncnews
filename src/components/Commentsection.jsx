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
          {comment.votes > 8 ? <span>🔥</span> : null}
          {comment.votes < 0 ? <span>💩</span> : null}
          <li className='commentVotes' >{comment.votes}</li>
          <button type='button'>👍</button>
          <button type='button'>👎</button>
        </ul>
      </div >
    )

  );
}

export default Commentsection;