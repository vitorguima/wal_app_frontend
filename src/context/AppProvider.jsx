/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import AppContext from './AppContext';

// eslint-disable-next-line react/prop-types
export default function AppProvider({ children }) {
  const [isFeedLoading, setIsFeedLoading] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState();
  const [hasAuthentication, setHasAuthentication] = useState(false);
  const [submittedPosts, setSubmittedPosts] = useState(0);
  const [postsList, setPostsList] = useState([]);

  const contextValue = {
    isFeedLoading,
    setIsFeedLoading,
    token,
    setToken,
    user,
    setUser,
    hasAuthentication,
    setHasAuthentication,
    submittedPosts,
    setSubmittedPosts,
    postsList,
    setPostsList,
  };

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}
