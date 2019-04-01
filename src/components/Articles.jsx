import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

class Articles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get('https://joes-nc-news.herokuapp.com/api/articles')
      .then((articles) => {
        this.setState({ articles: articles.data.articles })
      })
  }
  render() {
    console.log(this.state.articles)
    const { articles } = this.state


    return (
      <div>
        <ul>{articles.map(article => {
          return <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li >

        })
        }</ul>
      </div >





    )
  }



}


export default Articles;