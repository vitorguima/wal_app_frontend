import React from 'react'
import LoginForm from '../components/LoginForm'
import { HomeWrapper, FormWrapper, LogoWrapper, Logo, SubLogo } from '../styles/home';

export default function Home() {
  return (
    <HomeWrapper>
      <LogoWrapper>
        <Logo>The Wall</Logo>
        <SubLogo>Bring your ideas to our community!</SubLogo>
      </LogoWrapper>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </HomeWrapper>
  )
}
