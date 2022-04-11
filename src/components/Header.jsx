import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import validateTokenService from '../services/authentication/validateTokenService';

import {
  HeaderBiggerWrapper, HeaderMinorWrapper, HeaderWrapper, LogoutButton,
} from '../styles/header';

export default function Header() {
  const history = useHistory();

  const {
    hasAuthentication,
    setHasAuthentication,
    setUser,
    setToken,
  } = useContext(AppContext);

  const logoutUser = () => {
    localStorage.removeItem('token');
    setHasAuthentication(false);
    history.push('/');
  };

  useEffect(() => {
    const retrievedToken = localStorage.getItem('token');
    if (!retrievedToken) {
      return;
    }

    const validateToken = async () => {
      const response = await validateTokenService(retrievedToken);

      if (response.status === 200) {
        setHasAuthentication(true);
        setUser(response.data.token);
        setToken(retrievedToken);
      }
    };

    validateToken();
  }, []);

  const renderHeaderItems = () => {
    if (hasAuthentication) {
      return (
        <>
          <HeaderBiggerWrapper>
            <Link to="/publications" style={{ textDecoration: 'none' }}>
              <span>
                My Posts
              </span>
            </Link>
            <Link to="/feed" style={{ textDecoration: 'none' }}>
              <span>
                Feed
              </span>
            </Link>
          </HeaderBiggerWrapper>
          <HeaderMinorWrapper>
            <div>
              <LogoutButton onClick={() => logoutUser()}>Logout</LogoutButton>
            </div>
          </HeaderMinorWrapper>
        </>
      );
    } return (
      <>
        <HeaderBiggerWrapper>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span>
              Sign in
            </span>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <span>
              Sign up
            </span>
          </Link>
          <Link to="/feed" style={{ textDecoration: 'none' }}>
            <span>
              Feed
            </span>
          </Link>
        </HeaderBiggerWrapper>
        <HeaderBiggerWrapper />
      </>
    );
  };

  return (
    <HeaderWrapper>
      {renderHeaderItems()}
    </HeaderWrapper>
  );
}
