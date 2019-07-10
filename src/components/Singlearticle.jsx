import { Link } from "@reach/router"
import React, { Component } from 'react';
import '../css/Single-article.css'
const moment = require('moment')


class Singlearticle extends Component {

  render() {
    return (

      <div className='article-store'>


        <div className="content-store">

          <div className='topic-store' >
            <p className='info-topic' >#{this.props.article.topic}</p>
          </div>

          <div className='list-title'>
            <Link className='list-item' data={this.props.articles.articles} to={`/articles/${this.props.article.article_id}`}>{
              this.props.article.title}</Link >
          </div>





          <div className="info-store" >
            <p className='info-author' >{this.props.article.author}</p>
            <p className='info-time'>posted {moment(this.props.article.created_at).fromNow()}</p>
          </div>


          <div className="interaction-store">
            <p className='action-votes' >{this.props.article.votes} votes</p>
            <p className='action-comments' >{this.props.article.comment_count} comments</p>
          </div>
        </div>
      </div>
    );
  }

}
export default Singlearticle;

