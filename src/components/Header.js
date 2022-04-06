import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import { HeaderBiggerWrapper, HeaderMinorWrapper, HeaderWrapper } from '../styles/header';

export default function Header() {
  const { hasAuthentication, isFeedLoading } = useContext(AppContext);

  const renderHeaderItems = () =>  {
    if (hasAuthentication) {
      return(
        <>
        <HeaderBiggerWrapper />
          <HeaderMinorWrapper>
            <div>
              <span>Logout</span>
            </div>
        </HeaderMinorWrapper>
        </>
      )
    } else {
      return (
        <HeaderBiggerWrapper>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span>
              Sign in
            </span>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span>
              Sign up
            </span>
          </Link>
        </HeaderBiggerWrapper>
      ) 
    }
  }

  return (
    <HeaderWrapper>
      { isFeedLoading ? <p>Loading</p> : renderHeaderItems() }
    </HeaderWrapper>
  )
}
