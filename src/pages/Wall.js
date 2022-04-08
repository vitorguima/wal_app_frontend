import React from 'react'
import NewPostForm from '../components/NewPostForm'
import PostsFeed from '../components/PostsFeed'
import Header from '../components/Header';
import { FeedWrapper } from '../styles/PostsFeed'

export default function Wall() {
  return (
    <>
      <Header />
      <FeedWrapper>
        <NewPostForm />
        <PostsFeed />
      </FeedWrapper>
    </>
  )
}
