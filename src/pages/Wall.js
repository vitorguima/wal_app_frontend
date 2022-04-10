import React, { useEffect } from 'react'
import NewPostForm from '../components/NewPostForm'
import PostsFeed from '../components/PostsFeed'
import Header from '../components/Header';
import { FeedWrapper } from '../styles/PostsFeed';
import { useHistory, useLocation } from 'react-router-dom';

export default function Wall() {
  const history = useHistory();
  const currentPath = useLocation().pathname;

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token && currentPath === '/publications') return history.push('/');
  }, [])

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
