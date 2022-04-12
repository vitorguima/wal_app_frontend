/* eslint-disable no-undef */
import React from 'react';
import { waitFor } from '@testing-library/react';
import AppProvider from '../context/AppProvider';
import Header from '../components/Header';
import RenderWithRouter from './RenderWithRouter';

const axios = require('axios');

const fakeLocalStorage = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
}());

describe('Tests if Header component is rendering correctly', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('check if Header is rendering correctly when the user is logged', async () => {
    jest.spyOn(axios, 'default').mockResolvedValue({
      status: 200,
      data: {
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.k3MhEvwgPfRfHiBDLLZBO31rMkujPCb1iGM-ux3PM3o',
      },
    });

    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.k3MhEvwgPfRfHiBDLLZBO31rMkujPCb1iGM-ux3PM3o');

    const { getByText } = RenderWithRouter(
      <AppProvider>
        <Header />
      </AppProvider>,
    );

    const headerMyPosts = await waitFor(() => getByText('My Posts'));
    const headerLogout = getByText('Logout');
    const headerFeed = getByText('Feed');

    expect(headerMyPosts).toBeInTheDocument();
    expect(headerLogout).toBeInTheDocument();
    expect(headerFeed).toBeInTheDocument();
  });

  it('check if Header is rendering correctly when user is a visitor', async () => {
    jest.spyOn(axios, 'default').mockResolvedValue({
      status: 401,
    });

    const { getByText, getByTestId } = RenderWithRouter(
      <AppProvider>
        <Header />
      </AppProvider>,
    );

    const headerSignIn = getByText('Sign in');
    const headerSignUp = getByTestId('sign-up');
    const headerFeed = getByText('Feed');

    expect(headerSignIn).toBeInTheDocument();
    expect(headerSignUp).toBeInTheDocument();
    expect(headerFeed).toBeInTheDocument();
  });
});
