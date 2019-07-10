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
      <div className='articles'>

        <Navbar className='nav' />

        <div className="articles-store">

          <div className="content-store">

            <div className='filter-store'>
              <p className="sort-options">sort by</p>
              <select className='select' onChange={this.handleSort}>
                <option></option>
                <option className="option">newest</option>
                <option className="option" >oldest</option>
                <option className="option" >most votes</option>d notyjcd noth
            <option className="option" >least votes</option>
                <option className="option" >most discussed</option>
              </select >
              <p className='sort-options' >topics</p>
              <select className='select' onChange={this.handleChange}>
                <option></option>
                <option className="option" >coding</option>
                <option className="option" >cooking</option>
                <option className="option" >football</option>
              </select>
            </div>

            <div className='article-content'>
              <Articlelist articles={this.state.articles} user={this.props.user.username} save={this.props.save} delete={this.handleDelete} />
            </div >
          </div>
        </div>

      </div>
    )
  }

  handleChange = e => {
    this.setState({ topic: `?topic=${e.target.value}` })
  }

  handleSort = e => {
    this.setState({ sort: `?sortby=${e.target.value}` })
  }

  handleDelete = (article_id) => {
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