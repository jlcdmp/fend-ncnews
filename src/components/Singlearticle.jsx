import '../css/Articles.css'
import { Link } from "@reach/router"
import { deleteArticle } from './api'
import React, { Component } from 'react';
import { navigate } from "@reach/router/lib/history";
const moment = require('moment')

class Singlearticle extends Component {
  state = {
  }

  render() {
    const regex = /(days|day|hours|hour|seconds|second)/
    return (
      <li className='articleitemblock' key={this.props.article.article_id}>
        {regex.test(moment(this.props.article.created_at).fromNow()) === true && this.props.article.votes > 5 ?


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 24l2.674-9h-9.674l16-15-2.674 9h8.674l-15 15zm-1.586-11h6.912l-1.326 4 5.739-6h-6.065l1.304-4-6.564 6z" /></svg>


          : null}
        <Link className='articleitem' data={this.props.articles.articles} to={`/articles/${this.props.article.article_id}`}>{this.props.article.title}</Link >
        by {this.props.article.author}
        <br />
        {moment(this.props.article.created_at).fromNow()}
        {regex.test(moment(this.props.article.created_at).fromNow()) === true ?

          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.139 2.63l3.068-1.441.786 3.297 3.39.032-.722 3.312 3.038 1.5-2.087 2.671 2.087 2.67-3.038 1.499.722 3.312-3.39.033-.786 3.296-3.068-1.441-2.139 2.63-2.138-2.63-3.068 1.441-.787-3.296-3.389-.033.722-3.312-3.039-1.499 2.088-2.67-2.088-2.671 3.039-1.5-.722-3.312 3.389-.032.787-3.297 3.068 1.441 2.138-2.63 2.139 2.63zm-3.742 2.342l-2.303-1.081-.59 2.474-2.542.024.542 2.483-2.279 1.125 1.566 2.004-1.566 2.002 2.279 1.124-.542 2.485 2.542.025.59 2.472 2.303-1.081 1.603 1.972 1.604-1.972 2.301 1.081.59-2.472 2.543-.025-.542-2.485 2.279-1.124-1.565-2.002 1.565-2.004-2.279-1.125.542-2.483-2.543-.024-.59-2.474-2.301 1.081-1.604-1.972-1.603 1.972zm1.603 9.528c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1-.947h-2v-6.553h2v6.553z" /></svg>


          : null}
        <br />
        {this.props.article.votes > 9 ?
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.467 0c1.102.018 5.555 2.549 6.386 8.558.905-.889 1.409-3.664 1.147-4.843 3.952 2.969 6 6.781 6 11.034 0 5.094-3.43 9.251-8.963 9.251-5.728 0-9.037-3.753-9.037-8.276 0-6.26 5.052-7.62 4.467-15.724zm3.262 19.743c-.749.848-.368 1.945.763 2.045 1.035.093 1.759-.812 2.032-1.792.273-.978.09-2.02-.369-2.893-.998 1.515-1.52 1.64-2.426 2.64zm4.42 1.608c2.49-1.146 3.852-3.683 3.852-6.58 0-2.358-.94-4.977-2.5-7.04-.743 2.867-2.924 3.978-4.501 4.269.05-3.219-.318-6.153-2.602-8.438-.296 4.732-4.321 7.63-4.398 12.114-.029 1.511.514 3.203 1.73 4.415.491.489 1.054.871 1.664 1.16-.121-.608-.062-1.254.195-1.848.911-2.106 3.333-2.321 4.202-5.754.952.749 3.275 3.503 2.778 6.358-.082.469-.224.923-.42 1.344z" /></svg>
          : null}
        {this.props.article.votes}
        <lable>votes </lable>

        {"  "}
        {this.props.article.comment_count > 10 ?
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.333 6.805l4.213 7.297-13.256 3.223c-.572.133-1.068.333-1.492.604l-.227-.393c.525-.293.929-.675 1.227-.993l9.535-9.738zm.332-2.626l-11.011 11.244c-.616.66-1.164.977-1.857.977-.244 0-.507-.04-.797-.117l2.646 4.585c.258-1.094.814-1.708 2.006-1.985l15.348-3.732-6.335-10.972zm.31 13.951l-.467 2.118c-.094.378-.391.674-.77.771l-2.951.774c-.365.095-.754-.012-1.018-.28l-1.574-1.712 1.605-.395.646.77c.176.177.433.248.675.186l1.598-.425c.252-.064.449-.261.511-.512l.161-.906 1.584-.389zm8.719-11.267l-2.684 1.613-.756-1.262 2.686-1.612.754 1.261zm-4.396-1.161l-1.335-.616 1.342-2.914 1.335.617-1.342 2.913zm5.619 6.157l-3.202-.174.081-1.469 3.204.175-.083 1.468z" /></svg>
          : null}
        {this.props.article.comment_count}
        <lable stye={{}} >comments </lable>

        {this.props.article.author === this.props.user ? <button onClick={this.handleDelete} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" /></svg>

        </button> : null}
      </li >
    );
  }


  handleDelete = e => {
    const article_id = this.props.article.article_id
    if (window.confirm('Are you sure you want to delete this article?') === true) {
      deleteArticle(article_id).then(() => {

      })
    } else {
      navigate('/articles')
    }
  }
}
export default Singlearticle;

