import React, { useState, useEffect } from 'react'
import InstaPost from './InstaPost'

function Instagram() {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        fetch('https://graph.instagram.com/17841402917632023/media?fields=id,username,media_url,caption&access_token=IGQVJYaldzTDlVUjhfbzJTT1l1RDB3M1pCbXhLM0xlUzNJSXRxT09UMVRrc0tNY0VaUGhBbVZAfRm16MnB5ZAi14LU9ubUg3UDdfaWtXYkVqZA05CRjc0cXk3Y3NwSEk0ZA25uZAUs0RUhwTUdXYVFNVmlJMUgtR0IxQVhUR3dR')
            .then(response => response.json())
            .then(result => setPosts(result.data))
    }, [])

    const instaFeed = () => {
        return posts.map((post, key) => {
            return <InstaPost post={post} key={key}/>
        })
    }

    return (
        <ul>
            { instaFeed() }
        </ul>
    )
}

export default Instagram
