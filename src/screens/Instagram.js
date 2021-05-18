import React, { useState, useEffect } from 'react'
import InstaPost from '../components/InstaPost'

const Instagram = () => {
  const [ posts, setPosts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const AZ_FUNC = process.env.REACT_APP_AZ_FUNC
  
  useEffect(() => {
    fetch(AZ_FUNC)
      .then((result) => result.json())
      .then((response) => setPosts(response.result.data))
      .catch((err) => console.log(err))
      let timer = setTimeout(() => setLoading(false), 5000)

      return () => {
        clearTimeout(timer)
      }
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
        Keep Up With Everything We Do For The Community
      </h1>
      {loading && 
        <h2 className="instagram__loading"><span> <div className="spinner" id="spinner-ig"></div> </span> </h2>
      }
      <div className="instagram__section--container">
        { posts !== undefined &&
          instaFeed()
        }
      </div>
      {/* {!loading &&
        <div className="instagram__followUsHere">
          <h1 className="instagram__followFooter">Follow Love Thy Neighbor On Instagram and Facebook</h1>
        </div>
      } */}
      
    </div>
  )
}

export default Instagram
