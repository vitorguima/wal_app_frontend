import React from 'react'
import PostsFeed from '../components/PostsFeed'
import Header from '../components/Header';
import { FeedWrapper } from '../styles/PostsFeed'

export default function Publications() {
  return (
    <>
      <Header />
      <FeedWrapper>
        <PostsFeed />
      </FeedWrapper>
    </>
  )
}
