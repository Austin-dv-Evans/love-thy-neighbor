import React from 'react'

function InstaPost(props) {

    return (
        <div>
            <img src={props.post.media_url} alt="Instgram post" />
            <h2>{props.post.username}</h2>
            <p>{props.post.caption}</p>
        </div>
    )
}

export default InstaPost
