import React from 'react';
import Singlearticle from './Singlearticle';


const Articlelist = (props) => {
  return (
    props.articles.map(article => <Singlearticle article={article} articles={props.articles} user={props.user} />)
  )
}



export default Articlelist;