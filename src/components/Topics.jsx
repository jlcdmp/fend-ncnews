import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import Topicform from './Topicfrom';
import Navbar from './Navbar';
import '../css/Topics.css'

class Topics extends Component {
  state = {
    topics: []
  }
  componentDidMount() {
    axios.get('https://joes-nc-news.herokuapp.com/api/topics')
      .then((topics) => {
        this.setState({ topics: topics.data.topics })
      })
  }
  render() {
    const { topics } = this.state
    const eachtopic = topics.map(topic => {
      return <li key={topic.slug}><Link to={`/articles?topic=${topic.slug}`} >#{topic.slug}</Link></li>
    })
    return (
      <div className='topics'>



        <div className="header">
          <Navbar className='nav' />


          <div className="home-user-store" >
            <img className='user-img' alt="user-img" src={this.props.user.avatar_url} height='40px' width='40px' ></img>
            <p className='user-name' >@{this.props.user.username}</p>
          </div>


        </div>



        <div className="topic-page-store" >
          <div className="topic-content" >
            <div className='topic-prompt' >
              <p className='topic-p'>Topics are the fundemantal back bone of the site, Got somthing you want to talk about? Create a new topic and begin the conversation today!</p>
              <p className='topic-p'>Please provide a your topic with a suitable name and short description</p>
            </div>
            <div className='topic-content-store' >
              <div className='topic-list-store'>
                <p className="current-topics">Current topics...</p>
                <ul className="topic-list">{eachtopic}</ul>
              </div>
              <Topicform className='topic-form' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Topics;