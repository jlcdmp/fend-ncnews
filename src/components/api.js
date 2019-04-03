import axios from 'axios'


const BASEURL = 'https://joes-nc-news.herokuapp.com/api/'


export const fetchArticles = async (search) => {
  const { data } = await axios.get(`${BASEURL}/articles/${search}`)
    .catch(err => err)
  return data.articles
}

export const fetchComments = async (article_id) => {
  const { data } = await axios.get(`${BASEURL}/articles/${article_id}/comments`)
    .catch(err => err)
  return data.comments
}


export const postArticle = async (article) => {
  const { data } = await axios.post(`${BASEURL}/articles`)
    .catch(err => err)
  return data.article
}



export const fetchArticle = async () => {
  const { data } = await axios.get(`${BASEURL}/articles`)
    .catch(err => err)
  return data.articles
}