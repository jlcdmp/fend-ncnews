import React, { Component } from 'react';
import '../css/Articles.css'
import Articlelist from './Articlelist'
import { fetchArticles } from './api'
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
        <Articlelist articles={this.state.articles} user={this.props.user.user.username} save={this.props.save} />
      </div >
    )
  }
  handleChange = e => {
    this.setState({ topic: `?topic=${e.target.value}` })
  }

  handleSort = e => {
    this.setState({ sort: `?sortby=${e.target.value}` })
  }
}
export default Articles