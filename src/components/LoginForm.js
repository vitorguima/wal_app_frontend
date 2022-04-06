import { submitLoginService } from '../services/submitLoginService';
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { validateEmail } from '../helpers/validations';
import { Form, LoginField, Button } from '../styles/LoginForm';

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
      <Button
        onClick={() => submitLogin()}
        type="button"
        disabled={validateEmail(email)}
      >
        {isLoading ? 'Loading' : 'Sign in'}
      </Button>
      <p>{ errorMessage ? errorMessage : null }</p>
      <p>
        Not a waller? <Link to="/register">sign up</Link>
      </p>
    </Form>
  )
}
