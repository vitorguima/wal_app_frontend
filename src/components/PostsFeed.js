import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext';
import { getPostsListService } from '../services/posts/getPostsService';
import { getPostByUserService } from '../services/posts/getPostByUserService';
import { useLocation } from 'react-router-dom';
import PostsCard from './PostCard';
import LoadingSvg from '../assets/Loading';

export default function PostsFeed() {
  const { 
    isFeedLoading,
    setIsFeedLoading,
    submittedPosts,
    postsList,
    setPostsList,
  } = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState('');
  const currentPath = useLocation().pathname;

  const getPosts = async () => {
    setIsFeedLoading(true);
    const token = sessionStorage.getItem('token');
    const response = await servicesDictionary[currentPath](token);

    if (response.status === 200) {
      setPostsList(response.data);
      setIsFeedLoading(false);
      return
    } setIsFeedLoading(false);
    setErrorMessage(response.data.error)
  };

  const servicesDictionary = {
    '/feed': () => getPostsListService(),
    '/publications': (token) => getPostByUserService(token),
  }

  useEffect(() => {
    getPosts();
  // This is an expected behavior, the page should re-render to retrieve the new post submitted by the user.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submittedPosts, currentPath])

  const renderPostCards = () => (
    postsList.map((post, index) => (
      <PostsCard 
        title={post.title}
        content={post.content}
        authorNickname={post.author_nickname}
        createdAt={post.created_at}
        updatedAt={post.updated_at}
        key={index}
      />
    ))
  )

  return (
    <>
      { isFeedLoading ? <LoadingSvg /> : renderPostCards() }
      <p>{ errorMessage ? errorMessage : null }</p>
    </>
  )
}
