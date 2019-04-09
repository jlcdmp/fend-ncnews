import React, { Component } from 'react';
import { fetchArticles, deleteArticle } from './api'
import { navigate } from '@reach/router'
import '../css/Articles.css'
import Articlelist from './Articlelist'
import Navbar from './Navbar'

class Articles extends Component {
  state = {
    articles: [],
    topic: ''
  }

  async componentDidMount() {
    const articles = await fetchArticles('')
    this.setState({ articles: articles })
  }

  async componentDidUpdate(_, prevState) {
    if (this.state.topic !== prevState.topic) {
      const search = this.state.topic
      const articles = await fetchArticles(search)
      this.setState({ articles: articles })
    }
  }

  render() {
    return (
      < div >
        <Navbar />
        <header className='topbar'>
          <p>sort</p>
          <select onChange={this.handleSort}>
            <option></option>
            <option>newest</option>
            <option>oldest</option>
            <option>most votes</option>
            <option>least votes</option>
            <option>most discussed</option>
          </select >
          <p>topics</p>
          <select onChange={this.handleChange} >
            <option></option>
            <option>coding</option>
            <option>cooking</option>
            <option>football</option>
          </select>
          <br />
        </header>
        <Articlelist articles={this.state.articles} user={this.props.user.username} save={this.props.save} delete={this.handleDelete} />
      </div >
    )
  }

  handleChange = e => {
    this.setState({ topic: `?topic=${e.target.value}` })
  }

  handleSort = e => {
    this.setState({ sort: `?sortby=${e.target.value}` })
  }




  handleDelete = (article_id) => {
    console.log('click')
    if (window.confirm('Are you sure you want to delete this article?') === true) {
      deleteArticle(article_id).then(() => {
        const deleted = this.state.articles.filter(article => article.article_id !== article_id)

        this.setState({ articles: deleted })



      })
    } else {
      navigate('/articles')
    }
  }

}





export default Articles