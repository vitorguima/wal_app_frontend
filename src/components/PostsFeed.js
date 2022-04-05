import React, { useEffect, useState } from 'react'
import { getPostsList } from '../services/getPostsService';
import NewPostForm from './NewPostForm';
import PostsCard from './PostCard';

export default function PostsFeed() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      const response = await getPostsList();

      if (response.status === 200) {
        setPostsList(response.data);
        setIsLoading(false);
        return
      } setIsLoading(false);
      setErrorMessage(response.data.error.message)
    };

    getPosts()
  }, [])

  const renderPostCards = () => (
    postsList.map((post, index) => (
      <PostsCard 
        title={post.title}
        content={post.content}
        authorNickname={post.author_nickname}
        createdAt={post.created_at}
        updatedAt={post.updatedAt}
      />
    ))
  )

  return (
    <div>
      <p>PostsFeed</p>
      { !isLoading ? renderPostCards() : <p>Loading...</p> }
      <p>{ errorMessage ? errorMessage : null }</p>
      <NewPostForm />
    </div>
  )
}
