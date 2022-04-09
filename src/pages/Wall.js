import React from 'react'
import NewPostForm from '../components/NewPostForm'
import PostsFeed from '../components/PostsFeed'
import Header from '../components/Header';
import { FeedWrapper } from '../styles/PostsFeed';
import { useLocation } from 'react-router-dom';

export default function Wall() {
  const currentPath = useLocation().pathname;
  return (
    <>
      <Header />
      <FeedWrapper>
        <NewPostForm />
        <PostsFeed currentPath={currentPath}/>
      </FeedWrapper>
    </>
  )
}
