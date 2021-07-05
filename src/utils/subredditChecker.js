const axios = require('axios')

export const checkSubreddit = async (subreddit) => {
  // function that checks the first 10 posts of a subreddit. If there aren't 4 photos then it returns false.
  let successful = 0

  const limit = 10
  const successRate = 4

  // make an initial call
  const response = await axios.get(`https://www.reddit.com/r/${subreddit}/new.json?limit=${limit}`)
  const posts = response.data.data.children

  posts.forEach(post => {
    if (post.data.post_hint === 'image') {
      successful++
    }
  })
  
  if (successful >= successRate){
    return true
  }

  return false
}