/* eslint-disable no-undef */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppProvider from '../context/AppProvider';
import PostsFeed from '../components/PostsFeed';
import postListMock from '../__mocks__/postsList';
import fakeLocalStorage from '../__mocks__/fakeLocalStorage';

const axios = require('axios');

describe('Tests if PostsFeed component is rendering correctly', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('check if PostsFeed is rendering the posts correctly at path /feed', async () => {
    jest.spyOn(axios, 'default').mockResolvedValue({
      status: 200,
      data: postListMock,
    });

    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.k3MhEvwgPfRfHiBDLLZBO31rMkujPCb1iGM-ux3PM3o');
    const { getAllByTestId, getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: '/feed' }]}>
        <AppProvider>
          <PostsFeed />
        </AppProvider>
      </MemoryRouter>,
    );

    const renderedPosts = await waitFor(() => getAllByTestId('post-card'));
    const title = getByText('title');
    const content = getByText('content');

    expect(renderedPosts.length).toEqual(2);
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('check if PostsFeed is rendering the posts correctly at path /publications', async () => {
    jest.spyOn(axios, 'default').mockResolvedValue({
      status: 200,
      data: postListMock,
    });

    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.k3MhEvwgPfRfHiBDLLZBO31rMkujPCb1iGM-ux3PM3o');
    const { getAllByTestId, getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: '/publications' }]}>
        <AppProvider>
          <PostsFeed />
        </AppProvider>
      </MemoryRouter>,
    );

    const renderedPosts = await waitFor(() => getAllByTestId('post-card'));
    const title = getByText('title');
    const content = getByText('content');

    expect(renderedPosts.length).toEqual(2);
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
