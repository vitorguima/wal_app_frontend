import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext';
import { getPostsList } from '../services/getPostsService';
import PostsCard from './PostCard';

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
  }, [submittedPosts])

  const renderPostCards = () => (
    postsList.map((post, index) => (
      <PostsCard 
        title={post.title}
        content={post.content}
        authorNickname={post.author_nickname}
        createdAt={post.created_at}
        updatedAt={post.updatedAt}
        key={index}
      />
    ))
  )

  return (
    <div>
      <p>PostsFeed</p>
      { !isFeedLoading ? renderPostCards() : <p>Loading...</p> }
      <p>{ errorMessage ? errorMessage : null }</p>
    </div>
  )
}
