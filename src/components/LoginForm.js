import { submitLoginService } from '../services/submitLoginService';
import  { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { validateEmail } from '../helpers/validations';

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
      localStorage.setItem('token', response.data.token);
      history.push('/feed');
      return
    } setIsLoading(false);
    setErrorMessage('Invalid user or password!')
  }

  return (
    <div>
      <form>
          <div>
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
              placeholder="Password"
            />
          </div>
          <button
            onClick={ () => submitLogin() }
            type="button"
            disabled={validateEmail(email)}
          >
            { isLoading ? 'Loading' : 'Sign in' }
          </button>
      </form>
      <p>{errorMessage ? errorMessage : null}</p>
      <p>
        Not a waller? <Link to="/register">sign up</Link>
      </p>
    </div>
  )
}
