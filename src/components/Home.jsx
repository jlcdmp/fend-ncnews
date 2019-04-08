import React from 'react';
import Navbar from './Navbar'
import { Link } from '@reach/router'

const Home = (props) => {


  console.log(props.pinned)





  return (
    < div >
      <Navbar />
      <p>{props.user.user.username}</p> <img src={props.user.user.avatar_url} height='40px' width='40px' ></img>
      <p>Faviroute articles</p>
      {props.pinned.map(article => {
        return <Link to={`/articles/${article.article_id}`} >  <li>{article.titile}</li></Link>
      })}




    </div >
  )
}

export default Home;