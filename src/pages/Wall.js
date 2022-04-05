import React from 'react'
import NewPostForm from '../components/NewPostForm'
import PostsFeed from '../components/PostsFeed'

export default function Wall() {
  return (
    <div>
      <p>Wall</p>
      <PostsFeed />
      <NewPostForm />
    </div>
  )
}
