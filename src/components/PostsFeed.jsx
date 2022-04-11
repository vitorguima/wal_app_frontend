import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import getPostsListService from '../services/posts/getPostsService';
import getPostByUserService from '../services/posts/getPostByUserService';
import PostsCard from './PostCard';
import LoadingSvg from '../assets/Loading';

export default function PostsFeed() {
  const {
    isFeedLoading,
    setIsFeedLoading,
    submittedPosts,
    postsList,
    setPostsList,
    user,
  } = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState('');
  const currentPath = useLocation().pathname;

  const servicesDictionary = {
    '/feed': () => getPostsListService(),
    '/publications': (token) => getPostByUserService(token),
  };

  const getPosts = async () => {
    setIsFeedLoading(true);
    const token = localStorage.getItem('token');
    const response = await servicesDictionary[currentPath](token);

    if (response.status === 200) {
      setPostsList(response.data);
      setIsFeedLoading(false);
      return;
    } setIsFeedLoading(false);
    setErrorMessage(response.data.error);
  };

  useEffect(() => {
    getPosts();
  // eslint-disable-next-line max-len
  // This is an expected behavior, the page should re-render to retrieve the new post submitted by the user.
  }, [submittedPosts, currentPath]);

  const renderPostCards = () => (
    postsList.map((post) => (
      <PostsCard
        title={post.title}
        content={post.content}
        authorNickname={post.author_nickname}
        createdAt={post.created_at}
        updatedAt={post.updated_at}
        key={post.id}
        userId={post.user_id}
        user={user}
        postId={post.id}
      />
    ))
  );

  return (
    <>
      { isFeedLoading ? <LoadingSvg /> : renderPostCards() }
      <h1>{ !postsList.length && !isFeedLoading ? 'There are no posts' : null }</h1>
      <p>{ errorMessage || null }</p>
    </>
  );
}
