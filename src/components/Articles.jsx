import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import '../Articles.css'

class Articles extends Component {
  state = {
    articles: [],
    topics: []
  }

  componentDidMount() {
    axios.get('https://joes-nc-news.herokuapp.com/api/articles')
      .then((articles) => {
        this.setState({ articles: articles.data.articles })

      })
  }
  render() {
    const { articles } = this.state
    return (
      <div>
        <select >
          <option></option>
          <option>newest</option>
          <option>oldest</option>
          <option>most votes</option>
          <option>least votes</option>
          <option>most discussed</option>
          <option>random</option>
        </select >
        <button>search</button>

        <ul className='articlelist' >{articles.map(article => {
          return <li key={article.article_id}><Link className='articleitem' data={this.state.articles} to={`/articles/${article.article_id}`}>{article.title}</Link ></li >
        })
        }</ul>
      </div >
    )
  }










}

export default Articles