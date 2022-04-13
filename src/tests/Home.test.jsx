/* eslint-disable no-undef */
import React from 'react';
import AppProvider from '../context/AppProvider';
import Home from '../pages/Home';
import RenderWithRouter from './RenderWithRouter';

describe('Tests if Home page is rendering correctly', () => {
  it('check if logo is rendering', () => {
    const { getByText } = RenderWithRouter(
      <AppProvider>
        <Home />
      </AppProvider>,
    );
    const wallLogo = getByText('The Wall');
    const wallSubLogo = getByText('Bring your ideas to our community!');

    expect(wallLogo).toBeInTheDocument();
    expect(wallSubLogo).toBeInTheDocument();
  });

  it('check if login form is rendering', () => {
    const { getByTestId, getByText } = RenderWithRouter(
      <AppProvider>
        <Home />
      </AppProvider>,
    );
    const emailField = getByTestId('login-field-1');
    const passwordField = getByTestId('login-field-2');
    const signInButton = getByText('Sign in');
    const visitorButton = getByText('Visitor');
    const newBrick = getByText('Become a brick!');
    const signUp = getByText('sign up');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(visitorButton).toBeInTheDocument();
    expect(newBrick).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
  });
});
