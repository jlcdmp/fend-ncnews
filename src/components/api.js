import axios from 'axios'
import { navigate } from '@reach/router'


const BASEURL = 'https://joes-nc-news.herokuapp.com/api/'


export const fetchArticles = async (search) => {
  const { data } = await axios.get(`${BASEURL}/articles/${search}`)
    .catch(err => err)
  return data.articles
}

export const fetchArticle = async (article_id) => {
  const { data } = await axios.get(`${BASEURL}articles/${article_id}`)
    .catch(err => err)
  return data.article
}


export const fetchComments = async (article_id) => {
  const { data } = await axios.get(`${BASEURL}/articles/${article_id}/comments`)
    .catch(err => err)
  return data.comments
}


export const fetchUser = async (username) => {
  const { data } = await axios.get(`${BASEURL}users/${username}`)
  return data
}



export const postTopic = async (topic) => {
  const { data } = await axios.post(`${BASEURL}/topics`, topic)
  navigate(`/topics`)
    .catch(err => err)
  return data.topic
}

export const postArticle = async (article) => {
  const { data } = await axios.post(`${BASEURL}/articles`, article)
  navigate(`/articles/${data.newArticle.article_id}`)
    .catch(err => err)
  return data.article
}

export const postComment = async (comment, article_id) => {
  const { data } = await axios.post(`${BASEURL}/articles/${article_id}/comments`, comment)
  navigate(`/articles/${data.newComment.article_id}`)
    .catch(err => err)
  return data.newComment
}


export const voteOnArticle = async (article_id, numOfVotes) => {
  const { data } = await axios.patch(`${BASEURL}/articles/${article_id}`, { inc_votes: numOfVotes })
    .catch(err => err)
  return data.article
}

export const voteOnComment = async (comment_id, numOfVotes) => {
  const { data } = await axios.patch(`${BASEURL}/comments/${comment_id}`, { inc_votes: numOfVotes })
    .catch(err => err)
  return data.comment
}
