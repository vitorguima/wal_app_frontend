import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import { PostCard, PostTitle, PostDetails, PostContent } from '../styles/PostCard';

const convertData = (unformattedDate) => {
  const date = new Date(unformattedDate);
  const formattedData = date.toLocaleString();
  return formattedData;
}

export default function PostsCard(props) {
  const { user } = useContext(AppContext);
  console.log(user);
  const {
    title,
    content,
    authorNickname,
    createdAt,
    updatedAt,
  } = props;

  return (
    <PostCard>
      <PostTitle>
        {title}
      </PostTitle>
      <p>Author: {authorNickname}</p>
      <PostContent>
        <p>{content}</p>
      </PostContent>
      <PostDetails>
        <p>Created at: {convertData(createdAt)}</p>
        <p>Updated at: {convertData(updatedAt)}</p>
      </PostDetails>
    </PostCard>
  )
}
