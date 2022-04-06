import React from 'react'
import LoginForm from '../components/LoginForm'
import { HomeWrapper, FormWrapper, LogoWrapper, Logo  } from '../styles/home'

export default function Home() {
  return (
    <HomeWrapper>
      <LogoWrapper>
        <Logo>The Wall</Logo>
        <p>Bring your ideas to our community!</p>
      </LogoWrapper>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </HomeWrapper>
  )
}
