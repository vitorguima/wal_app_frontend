import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import submitPostService from '../services/posts/submitPostService';
import {
  ButtonWrapper, ContentField, Form, FormWrapper, SubmitButton, TitleField,
} from '../styles/newPostForm';

export default function NewPostForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [token, setToken] = useState('');

  const {
    hasAuthentication,
    submittedPosts,
    setSubmittedPosts,
  } = useContext(AppContext);

  const submitPost = async () => {
    setIsLoading(true);
    const response = await submitPostService(title, content, token);
    if (response.status === 201) {
      setIsLoading(false);
      setSubmittedPosts(submittedPosts + 1);
      setTitle('');
      setContent('');
      return;
    } setIsLoading(false);
    setErrorMessage(response.data.error.message);
  };

  useEffect(() => {
    const retrievedToken = localStorage.getItem('token');
    setToken(retrievedToken);
  }, []);

  return (
    <FormWrapper>
      <Form>
        <TitleField
          type="text"
          name="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="Title"
          disabled={!hasAuthentication}
        />
        <ContentField
          type="text"
          name="content"
          value={content}
          onChange={({ target }) => setContent(target.value)}
          placeholder="Write your idea!"
          disabled={!hasAuthentication}
        />
        <ButtonWrapper>
          <SubmitButton
            onClick={() => submitPost(title, content, token)}
            type="button"
            disabled={!hasAuthentication}
          >
            Post
          </SubmitButton>
        </ButtonWrapper>
        <div>
          <p>{errorMessage && !isLoading ? errorMessage : null}</p>
        </div>
      </Form>
    </FormWrapper>
  );
}
