import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NewPostForm from '../components/NewPostForm';
import PostsFeed from '../components/PostsFeed';
import Header from '../components/Header';
import FeedWrapper from '../styles/PostsFeed';

export default function Wall() {
  const history = useHistory();
  const currentPath = useLocation().pathname;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token && currentPath === '/publications') return history.push('/');
  }, []);

  return (
    <>
      <Header />
      <FeedWrapper>
        <NewPostForm />
        <PostsFeed />
      </FeedWrapper>
    </>
  );
}
