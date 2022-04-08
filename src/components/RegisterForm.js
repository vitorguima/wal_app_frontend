import  { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { validateFields } from '../helpers/validations';
import { RegisterField, RegisterButton } from '../styles/registerForm';
import { submitRegister } from '../services/submitRegisterService';
import { Form } from '../styles/registerForm';
import LoadingSvg from '../assets/Loading';

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
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const submitRegistration = async (event) => {
    event.preventDefault();
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
    <Form onSubmit={() => submitRegistration()}>
      <h2>Become a new brick!</h2>
      <RegisterField 
        type="text"
        name="firstName"
        value={ firstName }
        onChange={ ({ target }) => setFirstName(target.value) }
        placeholder="First name"
      />
      <RegisterField
        type="text"
        name="lastName"
        value={ lastName }
        onChange={ ({ target }) => setLastName(target.value) }
        placeholder="Last name"
      />
      <RegisterField
        type="text"
        name="nickname"
        value={ nickname }
        onChange={ ({ target }) => setNickname(target.value) }
        placeholder="Nickname"
      />
      <RegisterField
        type="text"
        name="email"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        placeholder="Email"
      />
      <RegisterField
        type="password"
        name="password"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
        placeholder="Password"
      />
      <RegisterField
        type="password"
        name="password"
        value={ passwordCheck }
        onChange={ ({ target }) => setPasswordCheck(target.value) }
        placeholder="Confirm password"
      />
      <RegisterButton
        onClick={ (event) => submitRegistration(event) }
        type="submit"
        disabled={ validateFields(email, password, passwordCheck) }
      >
        { isLoading ? 'loading' : 'Sign up' }
      </RegisterButton>
      <p>{errorMessage ? errorMessage : null}</p>
      <div>
        { isLoading ? <LoadingSvg /> : null }
      </div>
    </Form>
  )
}
