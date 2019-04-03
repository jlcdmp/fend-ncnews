import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import '../css/Articles.css'
import { BASEURL } from './base'
import Articlelist from './Articlelist'

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
    const { articles } = this.state

    return (
      < div >
        <p>sort</p>
        <select >
          <option></option>
          <option>newest</option>
          <option>oldest</option>
          <option>most votes</option>
          <option>least votes</option>
          <option>most discussed</option>
          <option>random</option>
        </select >

        <p>topics</p>
        <select>
          <option></option>
          <option>coding</option>
          <option>cooking</option>
          <option>football</option>
        </select>

        <Link to='/newarticle'><button>add</button></Link>

        <Articlelist articles={this.state.articles} />
      </div >
    )

  }
}

export default Articles