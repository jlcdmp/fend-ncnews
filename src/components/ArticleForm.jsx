import React, { Component } from 'react';
import axios from 'axios';
import { BASEURL } from './base'
import { navigate } from '@reach/router/lib/history';




class ArticleForm extends Component {
  state = {
    title: '',
    body: '',
    topic: '',
    author: ''
  }

  componentDidMount() {
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>post new article</p>
        <form>
          <p>author</p>
          <input onChange={this.handleInputA}></input>
          <p>title</p>
          <input onChange={this.handleInput}></input>
          <p>body</p>
          <textarea rows='15' cols='50' onChange={this.handleText}></textarea>
          <br />
          <p>topic</p>
          {/* <select onClick={this.handleTopic}>
            <option>football</option>
            <option>coding</option>
            <option>cooking</option>
          </select> */}

          <input onChange={this.handleTopic} ></input>
          <br />

          <button type='submit' onClick={this.handleSubmit}>post</button>
        </form>
      </div>

    );
  }

  handleTopic = e => {
    this.setState({ topic: e.target.value })
  }


  handleInputA = e => {
    this.setState({ author: e.target.value })
  }
  handleInput = e => {
    this.setState({ title: e.target.value })
  }

  handleText = e => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addArticle()
  }


  addArticle = () => {
    console.log(this.state)
    axios.post(`${BASEURL}articles`, this.state)
      .then((res) => {

      })
      .catch(err => console.log(err))
  }

}

export default ArticleForm;