import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext';
import { validateTokenService } from '../services/validateTokenService';

import { HeaderBiggerWrapper, HeaderMinorWrapper, HeaderWrapper, LogoutButton } from '../styles/header';

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const {
    hasAuthentication,
    setHasAuthentication,
    setUser,
  } = useContext(AppContext)

  const logoutUser = () => {
    sessionStorage.removeItem('token');
    setHasAuthentication(false);
    history.push('/');
  }

  useEffect(() => {
    const retrievedToken = sessionStorage.getItem('token');
    if (!retrievedToken) {
      setIsLoading(false);
      return
    }

    const validateToken = async () => {
      const response = await validateTokenService(retrievedToken);

      if (response.status === 200) {
        setHasAuthentication(true);
        setIsLoading(false);
        setUser(response.data.token);
        return
      } setIsLoading(false);
    }

    validateToken();
  }, [])

  const renderHeaderItems = () => {
    if (hasAuthentication) {
      return (
        <>
          <HeaderBiggerWrapper />
          <HeaderMinorWrapper>
            <div>
              <LogoutButton onClick={() => logoutUser()}>Logout</LogoutButton>
            </div>
          </HeaderMinorWrapper>
        </>
      )
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
    )
  }

  return (
    <HeaderWrapper>
      { isLoading ? null : renderHeaderItems() }
    </HeaderWrapper>
  )
}
