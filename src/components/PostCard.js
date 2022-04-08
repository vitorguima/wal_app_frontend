import React from 'react'
import { PostCard, PostTitle, PostDetails, PostContent } from '../styles/PostCard';

const convertData = (unformattedDate) => {
  const date = new Date(unformattedDate);
  const formattedData = date.toLocaleString();
  return formattedData;
}

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
      <PostTitle>{title}</PostTitle>
      <PostDetails>
        <p>Author: {authorNickname}</p>
        <p>Created at: {convertData(createdAt)}</p>
        <p>Updated at: {convertData(updatedAt)}</p>
      </PostDetails>
      <PostContent>
        <p>{content}</p>
      </PostContent>
    </PostCard>
  )
}
