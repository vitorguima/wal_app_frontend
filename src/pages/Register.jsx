import React from 'react';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';
import { FormWrapper } from '../styles/registerForm';

export default function Register() {
  return (
    <>
      <Header />
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>
    </>
  );
}
