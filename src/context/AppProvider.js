import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [isFeedLoading, setIsFeedLoading] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState();
  const [hasAuthentication, setHasAuthentication] = useState(false);
  const [submittedPosts, setSubmittedPosts] = useState(0);

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
  }

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
}
