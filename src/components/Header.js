import React from 'react'
import { Link } from 'react-router-dom';

import { HeaderBiggerWrapper, HeaderMinorWrapper, HeaderWrapper } from '../styles/header';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderBiggerWrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>
            Home
          </span>
        </Link>
        <Link to="/feed" style={{ textDecoration: 'none' }}>
          <span>
            Posts
          </span>
        </Link>
      </HeaderBiggerWrapper>
      <HeaderMinorWrapper>
        <div>
          <span>Logout</span>
        </div>
      </HeaderMinorWrapper>
    </HeaderWrapper>
  )
}
