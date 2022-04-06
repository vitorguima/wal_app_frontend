import { submitLoginService } from '../services/submitLoginService';
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { validateEmail } from '../helpers/validations';
import { Form, LoginField, LoginButton, VisitorButton } from '../styles/LoginForm';
import { Redirect } from 'react-router-dom';

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const submitLogin = async () => {
    setIsLoading(true);
    setErrorMessage('');
    const response = await submitLoginService(email, password)

    if (response.status === 201) {
      setIsLoading(false);
      sessionStorage.setItem('token', response.data.token);
      history.push('/feed');
      return
    } setIsLoading(false);
    setErrorMessage('Invalid user or password!')
  }

  const redirectAsVisitor = () => {
    return (
      history.push('/feed')
    )
  }

  return (
    <Form>
        <LoginField
          type="text"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Email"
        />
        <LoginField
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
        />
      <LoginButton
        onClick={() => submitLogin()}
        type="button"
        disabled={validateEmail(email)}
      >
        {isLoading ? 'Loading' : 'Sign in'}
      </LoginButton>
      <VisitorButton
        onClick={() => redirectAsVisitor()}
        type="button"
      >
        {isLoading ? 'Loading' : 'Visitor'}
      </VisitorButton>
      <p>{ errorMessage ? errorMessage : null }</p>
      <p>
        Become a brick! <Link to="/register">sign up</Link>
      </p>
    </Form>
  )
}
