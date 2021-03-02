import React, { useState, useEffect } from 'react'
import InstaPost from './InstaPost'

function Instagram() {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        fetch('https://graph.instagram.com/17841402917632023/media?fields=id,username,media_url,caption&access_token=IGQVJVNGEwNnpTYWxJUHRUUHdYOEV3RF9Xb3NyWHc4WlQtR3JFLVRWbnlBZAFBPVXdESHMyWEY4WUNIVnozdkVUTjk5NUpfMVNJQjJMM3pEUnZATbGE0OWU4YWpUN19ROUpwQ2x2Y3UyZAXpmT21FYkZAzRXhYaTEyOVZAHUGc4')
            .then(response => response.json())
            .then(result => setPosts(result.data))
    }, [])

    const instaFeed = () => {
        return posts.map((post) => {
            return <InstaPost post={post} />
        })
    }

    return (
        <ul>
            { instaFeed() }
        </ul>
    )
}

export default Instagram
