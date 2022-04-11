/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  PostCard, PostTitle, PostDetails, PostContent, DeleteButton,
} from '../styles/PostCard';
import validateOwner from '../helpers/postsCardValidations';
import deletePostService from '../services/posts/delePostService';
import AppContext from '../context/AppContext';

const convertData = (unformattedDate) => {
  const date = new Date(unformattedDate);
  const formattedData = date.toLocaleString();
  return formattedData;
};

export default function PostsCard(props) {
  const {
    token,
    submittedPosts,
    setSubmittedPosts,
    setIsFeedLoading,
  } = useContext(AppContext);

  const {
    title,
    content,
    authorNickname,
    createdAt,
    userId,
    user,
    postId,
  } = props;

  const deletePost = async () => {
    setIsFeedLoading(true);
    const response = await deletePostService(postId, token);

    if (response.status === 200) {
      setIsFeedLoading(false);
      setSubmittedPosts(submittedPosts + 1);
      return;
    } setIsFeedLoading(false);
  };

  // eslint-disable-next-line consistent-return
  const renderDeleteButton = () => {
    const isPostOwner = validateOwner(userId, user);

    if (isPostOwner) {
      return (
        <DeleteButton
          type="button"
          onClick={() => deletePost()}
        >
          x
        </DeleteButton>
      );
    }
  };

  return (
    <PostCard>
      <PostTitle>
        {title}
        { renderDeleteButton() }
      </PostTitle>
      <p>
        Author:
        {authorNickname}
      </p>
      <PostContent>
        <p>{content}</p>
      </PostContent>
      <PostDetails>
        <p>
          Created at:
          {convertData(createdAt)}
        </p>
      </PostDetails>
    </PostCard>
  );
}
