import React, { useState, useEffect } from 'react'
import InstaPost from '../components/InstaPost'

const Instagram = () => {
  const [ posts, setPosts ] = useState([])
  const AZ_FUNC = process.env.REACT_APP_AZ_FUNC
  
  useEffect(() => {
    fetch(AZ_FUNC)
      .then((result) => result.json())
      .then((resp) => setPosts(resp.result.data))
      .catch((err) => console.log(err))
  }, [])

  console.log(posts)

  const instaFeed = () => {
    return posts.map((post, key) => {
        return (
          <InstaPost
            post={post}
            key={key}
          />
        )
    })
  }

  return (
    <div className="instagram__pageContainer">
      <h1 className="instagram__heading">
        Keep Up With Everything We Do For The Community and Follow Us on Instagram
      </h1>
      <div className="instagram__section--container">
        {instaFeed()}
      </div>
    </div>
  )
}

export default Instagram
