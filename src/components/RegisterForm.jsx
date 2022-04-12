import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { validateFields } from '../helpers/formsValidations';
import { RegisterField, RegisterButton, Form } from '../styles/registerForm';
import submitRegister from '../services/authentication/submitRegisterService';
import LoadingSvg from '../assets/Loading';

const treatsErrorMessage = (message) => {
  const treatedMessage = message.split(',');
  return treatedMessage[0];
};

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
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
    const validFields = validateFields(firstName, lastName, email, password, passwordCheck);

    if (validFields) {
      setErrorMessage(validFields);
      return;
    }

    setErrorMessage('');
    setIsLoading(true);
    const response = await submitRegister(
      firstName,
      lastName,
      email,
      nickname,
      password,
    );

    if (response.status === 201) {
      setIsLoading(false);
      history.push('/');
      return;
    } setIsLoading(false);
    setErrorMessage(treatsErrorMessage(response.data.error.message));
  };

  return (
    <Form onSubmit={() => submitRegistration()}>
      <h2>Become a new brick!</h2>
      <RegisterField
        type="text"
        name="firstName"
        value={firstName}
        onChange={({ target }) => setFirstName(target.value)}
        placeholder="First name"
        data-testid="first-name"
      />
      <RegisterField
        type="text"
        name="lastName"
        value={lastName}
        onChange={({ target }) => setLastName(target.value)}
        placeholder="Last name"
        data-testid="last-name"
      />
      <RegisterField
        type="text"
        name="nickname"
        value={nickname}
        onChange={({ target }) => setNickname(target.value)}
        placeholder="Nickname"
        data-testid="nickname"
      />
      <RegisterField
        type="text"
        name="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Email"
        data-testid="email"
      />
      <RegisterField
        type="password"
        name="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="Password"
        data-testid="password"
      />
      <RegisterField
        type="password"
        name="password"
        value={passwordCheck}
        onChange={({ target }) => setPasswordCheck(target.value)}
        placeholder="Confirm password"
        data-testid="check-password"
      />
      <RegisterButton
        onClick={(event) => submitRegistration(event)}
        type="submit"
      >
        Sign up
      </RegisterButton>
      <p>{errorMessage || null}</p>
      <div>
        { isLoading ? <LoadingSvg /> : null }
      </div>
    </Form>
  );
}
