import React from 'react'
import LoginForm from '../components/LoginForm'
import { HomeWrapper, FormWrapper, LogoWrapper  } from '../styles/home'

export default function Home() {
  return (
    <HomeWrapper>
      <LogoWrapper>
        <p>image</p>
      </LogoWrapper>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </HomeWrapper>
  )
}
