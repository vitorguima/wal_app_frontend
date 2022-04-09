import React from 'react'
import PostsFeed from '../components/PostsFeed'
import Header from '../components/Header';
import { FeedWrapper } from '../styles/PostsFeed';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Publications() {
  const currentPath = useLocation().pathname;

  const feedMargin = {
    '/publications': '7rem;',
    '/feed': '0'
  }

  return (
    <>
      <Header />
      <FeedWrapper margin={feedMargin[currentPath]}>
        <PostsFeed />
      </FeedWrapper>
    </>
  )
}
