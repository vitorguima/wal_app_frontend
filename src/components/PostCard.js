import React from 'react'
import { PostCard, PostTitle, PostDetails, PostContent } from '../styles/PostCard';

export default function PostsCard(props) {
  const {
    title,
    content,
    authorNickname,
    createdAt,
    updatedAt,
  } = props;

  return (
    <PostCard>
      <PostTitle>title: {title}</PostTitle>
      <PostDetails>
        <p>Author: {authorNickname}</p>
        <p>Created at: {createdAt}</p>
        <p>Updated at: {updatedAt}</p>
      </PostDetails>
      <PostContent>
        <p>{content}</p>
      </PostContent>
    </PostCard>
  )
}
