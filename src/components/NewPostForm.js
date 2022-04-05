import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import { submitPostService } from '../services/submitPostService';
import { validateTokenService } from '../services/validateTokenService';

export default function NewPostForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [token, setToken] = useState('');
  const {
    hasAuthentication,
    setHasAuthentication,
    submittedPosts,
    setSubmittedPosts,
  } = useContext(AppContext)

  const submitPost = async (title, content, token) => {
    const response = await submitPostService(title, content, token);
    setIsLoading(true);
    if (response.status === 201) {
      setIsLoading(false);
      setSubmittedPosts(submittedPosts + 1);
      setTitle('');
      setContent('');
      return
    } setIsLoading(false);
    setErrorMessage(response.data.error.message)
  }

  useEffect(() => {
    const retrievedToken = sessionStorage.getItem('token');
    if (retrievedToken === null) {
      setIsLoading(false);
      return
    }

    const validateToken = async () => {
      setIsLoading(true);
      setToken(retrievedToken);
      const response = await validateTokenService(retrievedToken);

      if (response.status === 200) {
        setHasAuthentication(true);
        setIsLoading(false);
        return
      } setIsLoading(false);
      setErrorMessage(response.data.error.message)
    }

    validateToken();
  }, [])
  

  return (
    <div>
      <p>NewPostForm</p>
      <form>
        <div>
          <input 
            type="text"
            name="title"
            value={ title }
            onChange={ ({ target }) => setTitle(target.value) }
            placeholder="Title"
            disabled={ !hasAuthentication }
          />
        </div>
        <div>
          <input
            type="text"
            name="content"
            value={ content }
            onChange={ ({ target }) => setContent(target.value) }
            placeholder="Write your ideas!"
            disabled={ !hasAuthentication }
          />
        </div>
        <button
          onClick={() => submitPost(title, content, token) }
          type="button"
          disabled={ !hasAuthentication }
        >
        { isLoading ? 'loading' : 'Submit' }
        </button>
      </form>
      <p>{errorMessage ? errorMessage : null}</p>
    </div>
  )
}
