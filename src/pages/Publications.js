import React, { useEffect } from 'react'
import PostsFeed from '../components/PostsFeed'
import Header from '../components/Header';
import { FeedWrapper } from '../styles/PostsFeed';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Publications() {
  const currentPath = useLocation().pathname;
  const history = useHistory();

  const feedMargin = {
    '/publications': '7rem;',
    '/feed': '0'
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) return history.push('/');
  }, [])
  

  return (
    <>
      <Header />
      <FeedWrapper margin={feedMargin[currentPath]}>
        <PostsFeed />
      </FeedWrapper>
    </>
  )
}
