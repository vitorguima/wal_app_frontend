/* eslint-disable no-undef */
import React from 'react';
import AppProvider from '../context/AppProvider';
import Register from '../pages/Register';
import RenderWithRouter from './RenderWithRouter';

describe('Tests if Register page is rendering correctly', () => {
  it('check if Header is rendering as Visitor', () => {
    const { getByText, getByTestId } = RenderWithRouter(
      <AppProvider>
        <Register />
      </AppProvider>,
    );

    const headerSignIn = getByText('Sign in');
    const headerSignUp = getByTestId('sign-up');
    const headerFeed = getByText('Feed');

    expect(headerSignIn).toBeInTheDocument();
    expect(headerSignUp).toBeInTheDocument();
    expect(headerFeed).toBeInTheDocument();
  });

  it('check if Register form is rendering', () => {
    const { getByTestId } = RenderWithRouter(
      <AppProvider>
        <Register />
      </AppProvider>,
    );

    const firstNameField = getByTestId('first-name');
    const lastNameField = getByTestId('last-name');
    const nickNameField = getByTestId('nickname');
    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');
    const confirmPasswordField = getByTestId('check-password');

    expect(firstNameField).toBeInTheDocument();
    expect(lastNameField).toBeInTheDocument();
    expect(nickNameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(confirmPasswordField).toBeInTheDocument();
  });
});
