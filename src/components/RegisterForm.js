import  { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { validateEmail } from '../helpers/validations';
import { submitRegister } from '../services/submitRegisterService';

const treatsErrorMessage = (message) => {
  const treatedMessage = message.split(',');
  return treatedMessage[0];
}

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const submitRegistration = async () => {
    setErrorMessage('');
    setIsLoading(true);
    const response = await submitRegister(
      firstName,
      lastName,
      email,
      nickname,
      password
    );

    if (response.status === 201) {
      setIsLoading(false)
      history.push('/')
      return
    } setIsLoading(false)
    setErrorMessage(treatsErrorMessage(response.data.error.message))
  }

  return (
    <div>
      <form>
          <div>
            <input 
              type="text"
              name="firstName"
              value={ firstName }
              onChange={ ({ target }) => setFirstName(target.value) }
              placeholder="First name"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={ lastName }
              onChange={ ({ target }) => setLastName(target.value) }
              placeholder="Last name"
            />
          </div>
          <div>
            <input
              type="text"
              name="nickname"
              value={ nickname }
              onChange={ ({ target }) => setNickname(target.value) }
              placeholder="Nickname"
            />
          </div>
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
            onClick={ () => submitRegistration() }
            type="button"
            disabled={ validateEmail(email) }
          >
            { isLoading ? 'loading' : 'Sign up' }
          </button>
      </form>
      <p>{errorMessage ? errorMessage : null}</p>
    </div>
  )
}

// first_name, last_name, email, nickname, password
