import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext';
import { getPostsList } from '../services/posts/getPostsService';
import PostsCard from './PostCard';
import LoadingSvg from '../assets/Loading';

export default function PostsFeed() {
  const { 
    isFeedLoading,
    setIsFeedLoading,
    submittedPosts,
  } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setIsFeedLoading(true);
      const response = await getPostsList();

      if (response.status === 200) {
        setPostsList(response.data);
        setIsFeedLoading(false);
        return
      } setIsFeedLoading(false);
      setErrorMessage(response.data.error.message)
    };

    getPosts()
  // This is an expected behavior, the page should re-render to retrieve the new post submitted by the user.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submittedPosts])

  const renderPostCards = () => (
    postsList.map((post, index) => (
      <PostsCard 
        title={post.title}
        content={post.content}
        authorNickname={post.author_nickname}
        createdAt={post.created_at}
        updatedAt={post.updated_at}
        userId={post.user_id}
        key={index}
        postId={post.id}
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
