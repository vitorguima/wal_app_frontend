import React from 'react'

export default function PostsCard(props) {
  const {
    title,
    content,
    authorNickname,
    createdAt,
    updatedAt,
  } = props;

  return (
    <div>
      <p>PostsCard</p>
      <p>title: {title}</p>
      <p>content: {content}</p>
      <p>author: {authorNickname}</p>
      <p>created at: {createdAt}</p>
      <p>updated at: {updatedAt}</p>
    </div>
  )
}
