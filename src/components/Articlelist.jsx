import { Link } from '@reach/router'
import React from 'react';
const moment = require('moment')


const Articlelist = (props) => {
  return (
    <div>
      <ul className='allarticlelist' >{props.articles.map(article => {
        return <li className='articleitemblock' key={article.article_id}>
          {moment(article.created_at).fromNow().includes('hours') === true && article.votes > 5 ? <span>⚡</span> : null}
          <Link className='articleitem' data={props.articles} to={`/articles/${article.article_id}`}>
            {article.title}
          </Link >
          by{article.author}
          {"  "}
          {moment(article.created_at).fromNow()}
          {moment(article.created_at).fromNow().includes('hours') === true ? <span>🆕</span> : null}
          <br />
          votes {article.votes}
          {article.votes > 9 ? <span>🔥</span> : null}
          {"  "}
          comments {article.comment_count}
          {article.comment_count > 10 ? <span>👄</span> : null}

        </li >
      })
      }</ul>
    </div>
  );
}

export default Articlelist;