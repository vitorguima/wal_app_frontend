/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import AppContext from './AppContext';

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

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
