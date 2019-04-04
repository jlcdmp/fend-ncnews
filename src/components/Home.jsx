import React from 'react';
import Navbar from './Navbar'

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <p>{props.user.user.username}</p><img src={props.user.user.avatar_url} height='40px' width='40px' ></img>
      <p>interactions on content</p>
      <p>interactions on pinned</p>
      <p>treding this week</p>
      <p>hotest this week </p>
      <p>most talked about this week</p>
      <p>new today</p>
    </div>
  )
}

export default Home;