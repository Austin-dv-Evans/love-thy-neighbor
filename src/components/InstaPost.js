import React from 'react'

export const InstaPost = (props) => {

    return (
      <div className="instagram__instaPost--container">
        <img
          src={props.post.media_url}
          alt="Instgram post"
          className="instagram__instaPost--image"
        />
        <p className="instagram__instaPost--caption">{props.post.caption}</p>
      </div>
    )
}

export default InstaPost
