import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import '../css/Articles.css'
import { BASEURL } from './base'

class Articles extends Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    axios.get(`${BASEURL}/articles/${this.props.location.search}`)
      .then((articles) => {
        this.setState({ articles: articles.data.articles })
      })
  }

  componentDidUpdate() { }

  render() {
    console.log(this.props)
    const { articles } = this.state

    return (
      < div >
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

        <ul className='allarticlelist' >{articles.map(article => {

          return <li className='articleitemblock' key={article.article_id}>

            <Link className='articleitem' data={this.state.articles} to={`/articles/${article.article_id}`}>
              {article.title}
            </Link >
            <br />  by:{article.author} votes:{article.votes}{"     "}comments:{article.comment_count}

          </li >

        })
        }</ul>
      </div >
    )

  }
}

export default Articles