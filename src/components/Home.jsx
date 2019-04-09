import React, { Component } from 'react';
import Navbar from './Navbar'
import { Link } from '@reach/router'
import '../css/app.css'
import { fetchArticles } from './api';


class Home extends Component {
  state = {
    userArts: []
  }


  componentDidMount() {
    const search = `?author=${this.props.user.username}`
    fetchArticles(search).then(articles => {
      this.setState({ userArts: articles })
    })
  }


  render() {
    return (
      <div >



        <Navbar />
        <header className='homehead'>
          <img className='userpic' src={this.props.user.avatar_url} height='40px' width='40px' ></img> <label>{this.props.user.username}</label>
        </header>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-1.123 1.168-1.816 2.752-1.816 4.5 0 3.736 3.162 6.768 7 6.475zm-.5-10.975c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.695-.697.992.94 2.115-2.169.697.696-2.811 2.867z" /></svg>
        <lable>Faviroute articles</lable>
        <ul className='faveList'>
          {this.props.pinned.map(article => {
            return <Link to={`/articles/${article.article_id}`}><li className='fave' >{article.title}</li></Link>
          })}
        </ul>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.203.456.455.456.115 0 .229-.042.318-.128l.748-.729-.633-.654-.749.728zm8.212-6.482l-2.57 2.481c-.824.799-1.607 1.328-2.705 1.79.496-1.084 1.05-1.852 1.873-2.65l2.569-2.479-1.049-1.083-2.564 2.485c-1.378 1.336-2.08 2.63-2.73 4.437l1.133 1.169c1.824-.593 3.14-1.255 4.518-2.591l2.563-2.486-1.038-1.073zm7.878-7.243l-5.527 5.359-1.239-1.279 5.529-5.361c.824-.803 2.087.456 1.237 1.281zm-.643-3.036c-.572 0-1.156.209-1.64.678l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.47.728-1.094.728-1.719 0-1.426-1.181-2.395-2.414-2.395zm-8.586 21.544v-2h-6v2h6zm-6-14h3.013l2.058-2h-5.071v2zm11 10v2h-3v2h5v-4h-2zm0-2h2v-5.473l-2 1.938v3.535zm-18 0h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2zm3 10h-3v-2h-2v4h5v-2z" /></svg>
        <lable>My articles</lable>


        <ul className='faveList' >
          {this.state.userArts.map(article => {
            return <Link to={`/articles/${article.article_id}`}>
              <li className='fave' >{article.title}</li>
            </Link>
          })}
        </ul>




      </div >
    );
  }





}

export default Home;







