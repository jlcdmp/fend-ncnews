import React, { Component } from 'react';
import { Link } from '@reach/router'
import '../css/Articles.css'
import Articlelist from './Articlelist'
import { fetchArticles } from './api'
import Navbar from './Navbar'


class Articles extends Component {
  state = {
    articles: [],
  }

  async componentDidMount() {
    const search = this.props.location.search
    const articles = await fetchArticles(search)
    this.setState({ articles: articles })
  }


  render() {
    return (
      < div >
        <Navbar />
        <header className='topbar'>
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

          <br />


          <Link to='/newarticle'>Post</Link>
        </header>

        <Articlelist articles={this.state.articles} user={this.props.user.user.username} />
      </div >
    )

  }
}

export default Articles