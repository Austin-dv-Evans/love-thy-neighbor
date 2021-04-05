import React, { useState, useEffect } from 'react'
import InstaPost from './InstaPost'
import Social from '../components/Social'
function Instagram() {
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
                className="findUs__instaScroll--image"
                post={post}
                key={key}
              />
            )
        })
    }

    return (
      <ul>
        <div className="findUs__container">
          <div className="findUs__instaScroll">
            
            {instaFeed()}
          </div>
          <Social />
        </div>
      </ul>
    )
}

export default Instagram
