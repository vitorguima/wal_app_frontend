import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext';
import { PostCard, PostTitle, PostDetails, PostContent } from '../styles/PostCard';
import { TitleField, ContentField } from '../styles/newPostForm';
import {updatePostService} from '../services/posts/updatePostService'

const convertData = (unformattedDate) => {
  const date = new Date(unformattedDate);
  const formattedData = date.toLocaleString();
  return formattedData;
}

const checkPostOwner = (associatedUser, currentUser) => {
  return associatedUser === currentUser;
}

export default function PostsCard(props) {
  const { user, token } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingContent, setEditingContent] = useState('');

  const {
    title,
    content,
    authorNickname,
    createdAt,
    updatedAt,
    userId,
    postId,
  } = props;

  const beginEditingPost = () => {
    setIsEditing(true);
    setEditingTitle(title);
    setEditingContent(content);
  }

  const isEditingButtons = () => {
    return (
      <div>
        <button
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
        <button
          onClick={() => {updatePostService(token, postId, editingTitle, editingContent)
            setIsEditing(false)
            }}
        >
          Update
        </button>
      </div>
    )
  }

  const editButton = () => {
    return (
      <div>
        <button
          onClick={() => beginEditingPost()}
        >
          Edit
        </button>
      </div>
    )
  }

  const renderCard = () => {
    if (isEditing) {
      return (
        <PostCard>
          <PostTitle>
            <TitleField
              type="text"
              name="title"
              value={editingTitle}
              onChange={({ target }) => setEditingTitle(target.value)}
              placeholder="Title"
            />
            {isEditingButtons()}
          </PostTitle>
          <p>Author: {authorNickname}</p>
          <PostContent>
            <ContentField
              type="text"
              name="content"
              value={editingContent}
              onChange={({ target }) => setEditingContent(target.value)}
              placeholder="Write your idea!"
            />
          </PostContent>
          <PostDetails>
            <p>Created at: {convertData(createdAt)}</p>
            <p>Updated at: {convertData(updatedAt)}</p>
          </PostDetails>
        </PostCard>
      )
    } return (
      <PostCard>
        <PostTitle>
          {title}
          {checkPostOwner(user, userId) ? editButton() : null}
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

  return (
    renderCard()
  )
}
